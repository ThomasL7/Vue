import { shallowMount } from "@vue/test-utils";
import EventsTutorial from "@/views/EventsTutorial.vue";

describe("EventsTutorial.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(EventsTutorial);
  });

  it("initializes with correct default data", () => {
    expect(wrapper.vm.clickCount).toBe(0);
    expect(wrapper.vm.hoverMessage).toBe("Survolez ce texte.");
  });

  it("increments clickCount when the button is clicked", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.vm.clickCount).toBe(1);
  });

  it("updates hoverMessage on mouseover and mouseleave events", async () => {
    const paragraph = wrapper.find("p");

    await paragraph.trigger("mouseover");
    expect(wrapper.vm.hoverMessage).toBe("Vous survolez le texte!");

    await paragraph.trigger("mouseleave");
    expect(wrapper.vm.hoverMessage).toBe("Survolez ce texte.");
  });
});
