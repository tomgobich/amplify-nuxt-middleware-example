import Builder, { Enum } from './Builder'

export default class UserBuilder extends Builder {
  constructor(username, email) {
    super()

    this.NamePreference = new NamePreferenceEnum()
    this.ThemePreference = new ThemePreferenceEnum()

    this.username = username
    this.email = email
    this.preferences = {}
  }

  setId(id) {
    this.id = id
    return this
  }

  setName(name) {
    this.name = name
    return this
  }

  setBiography(bio) {
    this.biography = bio
    return this
  }

  setWebsite(website) {
    this.website = website
    return this
  }

  setNamePreference(namePreference = this.NamePreference.default) {
    if (this.NamePreference.validate(namePreference)) {
      this.preferences.namePreference = namePreference
    }
  }

  setThemePreference(themePreference = this.ThemePreference.default) {
    if (this.ThemePreference.validate(themePreference)) {
      this.themePreference = themePreference
    }
  }

  setAccounts(accounts) {
    this.accounts = accounts
    return this
  }

  setAvatar(avatar) {
    this.avatar = avatar
    return this
  }

  get definition() {
    const { NamePreference, ThemePreference } = this

    return {
      id: this._define(String, false),
      username: this._define(String, true),
      name: this._define(String, false),
      email: this._define(String, true),
      biography: this._define(String, false),
      website: this._define(String, false),
      avatar: {
        bucket: this._define(String, true),
        region: this._define(String, true),
        key: this._define(String, true),
        url: this._define(String, true)
      },
      accounts: {
        twitter: this._define(String, false),
        facebook: this._define(String, false),
        instagram: this._define(String, false),
        github: this._define(String, false),
        dribbble: this._define(String, false),
        linkedin: this._define(String, false),
        behance: this._define(String, false),
        ello: this._define(String, false)
      },
      preferences: {
        name: this._define(Enum, true, NamePreference),
        theme: this._define(Enum, false, ThemePreference)
      }
    }
  }
}

class NamePreferenceEnum extends Enum {
  constructor() {
    const values = ['username', 'name']
    super(values, values[0])
  }
}

class ThemePreferenceEnum extends Enum {
  constructor() {
    const values = ['light', 'dark']
    super(values, values[0])
  }
}
