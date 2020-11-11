

import { Item, ControlItem, Icon } from '@app/models/frontend';
export { Item, ControlItem } from '@app/models/frontend';   // <--- the main point is hier that all the application components
                                                           // will use MODEL from the store, no component will use Global Model
export interface Dictionaries {                           // this is the reason he uses hier this  "export"
  roles: Dictionary;
  specializations: Dictionary;
  qualifications: Dictionary;
  skills: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
