import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import DataTypesComputed from "../views/DataTypesComputed.vue";
import ButtonTimer from "../views/ButtonTimer.vue";
import EventsTutorial from "../views/EventsTutorial.vue";
import ConditionsTutorial from "../views/ConditionsTutorial.vue";
import ScopedStyles from "../views/StylesTutorial.vue";
import PropsData from "../views/PropsDataTutorial.vue";
import EmitEvents from "../views/EmitTutorial.vue";
import SlotsTutorial from "../views/SlotsTutorial.vue";
import FormTutorial from "../views/Form.vue";
import ToDo from "../views/ToDo.vue";
import AuthPage from "../views/AuthPage.vue";
import Pagination from "../views/Pagination.vue";
import FilterSearch from "../views/FilterSearch.vue";
import State from "../views/State.vue";
import Api from "../views/Api.vue";
import Animations from "../views/Animations.vue";
import LineEdition from "../views/LineEdition.vue";
import DragDrop from "../views/DragDrop.vue";
import CacheIn from "../views/CacheIn.vue";
import DynaForm from "../views/DynaForm.vue";
import Graphic from "../views/Graphic.vue";
import Theme from "../views/Theme.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/data-computed", name: "DataTypesComputed", component: DataTypesComputed },
  { path: "/button-timer", name: "ButtonTimer", component: ButtonTimer },
  { path: "/events", name: "EventsTutorial", component: EventsTutorial },
  { path: "/conditions", name: "ConditionsTutorial", component: ConditionsTutorial },
  { path: "/scoped-styles", name: "ScopedStyles", component: ScopedStyles },
  { path: "/props-data", name: "PropsData", component: PropsData },
  { path: "/emit-events", name: "EmitEvents", component: EmitEvents },
  { path: "/slots", name: "SlotsTutorial", component: SlotsTutorial },
  { path: "/form", name: "FormTutorial", component: FormTutorial },
  { path: "/to-do", name: "ToDo", component: ToDo },
  { path: "/auth-page", name: "AuthPage", component: AuthPage },
  { path: "/pagination", name: "Pagination", component: Pagination },
  { path: "/filter-search", name: "FilterSearch", component: FilterSearch },
  { path: "/state", name: "State", component: State },
  { path: "/api", name: "Api", component: Api },
  { path: "/animations", name: "Animations", component: Animations },
  { path: "/line-edition", name: "LineEdition", component: LineEdition },
  { path: "/drag-drop", name: "DragDrop", component: DragDrop },
  { path: "/cache", name: "CacheIn", component: CacheIn },
  { path: "/dyna-form", name: "DynaForm", component: DynaForm },
  { path: "/graphic", name: "Graphic", component: Graphic },
  { path: "/theme", name: "Theme", component: Theme },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
