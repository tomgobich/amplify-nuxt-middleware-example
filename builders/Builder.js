export default class Builder {
  constructor() {}

  _define(type, required, enumerator) {
    return { type, required, enumerator, __type: '_define' }
  }

  _setFields(fields) {
    this.fields = fields
    return this
  }

  _getField(field, fallback, definition) {
    if (this[field]) return this[field]
    const { required } = definition[field]
    return required ? fallback : null
  }

  _getEnumField(field, enumerator, definition) {
    const value = this[field]
    if (value && enumerator.validate(value)) {
      return value
    } else {
      const { required } = definition[field]
      return required ? enumerator.default : null
    }
  }

  buildField(field, definition) {
    const { type, enumerator } = definition[field]

    switch (type) {
      case Object:
        return this._getField(field, {}, definition)
      case Array:
        return this._getField(field, [], definition)
      case Number:
        return this._getField(field, 0, definition)
      case Enum:
        return this._getEnumField(field, enumerator, definition)
      default:
        return this._getField(field, '', definition)
    }
  }

  build(nest = null, parent = this.definition) {
    let type = {}
    const definition = nest ? parent[nest] : parent

    for (let field in definition) {
      if (definition[field].__type !== '_define') {
        let value = this.build(field, definition)
        const hasKeys = Object.keys(value).length > 0
        const includeKeys = Object.keys(value).filter(
          v => value[v] || value[v] === null
        )
        if (hasKeys && includeKeys.length) {
          let fieldValue = {}
          includeKeys.forEach(k => (fieldValue[k] = value[k]))
          type[field] = fieldValue
        }
      } else {
        let value = this.buildField(field, definition)
        if (value !== null) {
          type[field] = value
        }
      }
    }

    return type
  }
}

export class Enum {
  constructor(values, defaultValue = null) {
    this.values = values
    this._default = defaultValue
  }

  get default() {
    return this._default
  }

  validate(value) {
    return this.values.indexOf(value) !== -1
  }
}
