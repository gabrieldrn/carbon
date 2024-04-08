/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './button.scss?lit';
import { prefix } from '../../globals/settings';

/**
 * Button set without button checks
 *
 * @element cds-button-set-base
 */
@customElement(`${prefix}-button-set-base`)
class CDSButtonSetBase extends LitElement {
  render() {
    return html`<slot></slot>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'list');
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}
/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default CDSButtonSetBase;
