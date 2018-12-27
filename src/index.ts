// tslint:disable:forin
import { Components } from './components/index';

export const SideScrollPlugin = {
  install(Vue: any) {

    if (Vue._Side_Scroll_Components_installed) {
      return;
    }

    Vue._Side_Scroll_Components_installed = true;

    // Register component plugins
    for (const plugin in Components) {
      Vue.component(plugin, Components[plugin]);
    }
  },
};

// Window must be cast as any to allow for looking for the Vue property
if (typeof window !== 'undefined' && (window as any).Vue) {
  (window as any).Vue.use(SideScrollPlugin);
}

export default SideScrollPlugin;
