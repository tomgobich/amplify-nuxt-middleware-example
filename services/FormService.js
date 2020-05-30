export const controlStates = {
  pristine: 'PRISTINE',
  dirty: 'DIRTY',
  error: 'ERROR',
  warn: 'WARN',
  valid: 'VALID'
};

export const formStates = {
  ...controlStates,
  success: 'SUCCESS',
  sending: 'SENDING'
};

class FormService {
  get controlStates() {
    return {
      pristine: 'PRISTINE',
      dirty: 'DIRTY',
      error: 'ERROR',
      warn: 'WARN',
      valid: 'VALID'
    };
  }

  get formStates() {
    return {
      ...controlStates,
      success: 'SUCCESS',
      sending: 'SENDING'
    };
  }

  get safeUpdateFormStates() {
    return [this.controlStates.pristine, this.controlStates.dirty];
  }

  _getControlInstance(key, defaultValues) {
    if (defaultValues[key] && !defaultValues[key].value) {
      return { value: defaultValues[key] };
    } else if (defaultValues[key]) {
      return defaultValues[key];
    }
    return undefined;
  }

  _getControlObject(
    form,
    controlInstance = {
      value: '',
      placeholder: '',
      state: this.controlStates.pristine,
      error: null,
      errorCount: 0
    }
  ) {
    let controlObject = { ...controlInstance };
    controlObject.updateState = state => {
      controlObject.state = state;
      if (this.safeUpdateFormStates.indexOf(state) > -1) {
        form.updateState(state);
      }
    };
    controlObject.setError = error => {
      if (controlObject.error === error) controlObject.errorCount++;
      controlObject.error = error;
    };
    return controlObject;
  }

  createForm(formInstance, defaultValues = {}) {
    let form = {};
    form.formState = controlStates.pristine;
    form.updateState = state => {
      form.formState = state;
    };
    form.dispatch = (fields = formInstance) => {
      let copy = {};
      fields.map(key => {
        if ((form[key].state = this.controlStates.pristine)) {
          form[key].state = this.controlStates.dirty;
        }
        copy[key] = form[key].value;
      });
      return copy;
    };
    form.getIncomplete = (fields = formInstance) => {
      let incomplete = [];
      fields.map(key => {
        if (form[key].state === this.controlStates.pristine || !form[key].value) {
          incomplete.push(key);
        }
      });
      return incomplete;
    };
    form.clear = (fields = formInstance) => {
      fields.map(key => (form[key] = this._getControlObject(form)));
    };
    form.clearErrors = (fields = formInstance) => {
      fields.map(key => (form[key].error = null));
    };

    form.setValues = (defaultValues = {}) => {
      if (Array.isArray(formInstance)) {
        formInstance.forEach(key => {
          const controlInstance = this._getControlInstance(key, defaultValues);
          form[key] = this._getControlObject(form, controlInstance);
        });
      } else if (typeof formInstance === 'object') {
        Object.keys(formInstance).forEach(key => {
          const controlInstance = this._getControlInstance(key, defaultValues);
          form[key] = this._getControlObject(formInstance[key], controlInstance);
        });
      } else {
        console.warn('[createForm] formInstance must be array or object'), typeof formInstance;
      }
    };

    form.setValues(defaultValues);

    return form;
  }
}

export default new FormService();
