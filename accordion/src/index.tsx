/** @jsx createElement */
/** @jsxFrag createFragment */
import {
  ExtensionElementViewContext,
  Components,
  createView,
  createRuntime,
  createElement,
  createTemp,
  createFunction,
} from "@vrite/sdk/extensions";

declare global {
  interface Window {
    currentRequestController?: AbortController;
  }
}

type Config = {};
const iconChevronDown =
  "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
const iconChevronUp =
  "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";

export default createRuntime({
  elements: [
    {
      type: "Accordion",
      view: createView<ExtensionElementViewContext<Config>>(({ css }) => {
        const accordionTitleBase = css`flex items-start border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-2 py-1`;
        const accordionContentClosed = css`h-0 overflow-hidden`;
        const accordionTitleOpened = css`border-b-2 rounded-t-2xl`;
        const accordionTitleClosed = css`rounded-2xl`;
        const [opened, setOpened] = createTemp<boolean>(true);
        const [icon, setIcon] = createTemp<string>(iconChevronUp);
        const [contentClass, setContentClass] = createTemp<string>("");
        const [titleClass, setTitleClass] = createTemp<string>(
          `${accordionTitleBase} ${accordionTitleOpened}`
        );
        const handleToggle = createFunction(() => {
          setOpened(!opened());
          setIcon(opened() ? iconChevronUp : iconChevronDown);
          setContentClass(opened() ? "" : accordionContentClosed);
          setTitleClass(
            `${accordionTitleBase} ${
              opened() ? accordionTitleOpened : accordionTitleClosed
            }`
          );
        });

        return (
          <Components.View
            class={css`flex flex-col items-center justify-start m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700`}
          >
            <Components.Content>
              <Components.Element type="AccordionTitle">
                <Components.View bind:class={titleClass}>
                  <Components.View
                    class={css`flex justify-center items-center min-h-[35px]`}
                  >
                    <Components.IconButton
                      bind:path={icon}
                      on:click={handleToggle}
                      class={css`m-0 mr-2`}
                    />
                  </Components.View>
                  <Components.Content allowed={["paragraph"]} />
                </Components.View>
              </Components.Element>
              <Components.Element type="AccordionContent">
                <Components.View bind:class={contentClass}>
                  <Components.View class={css`px-4 py-2`}>
                    <Components.Content />
                  </Components.View>
                </Components.View>
              </Components.Element>
            </Components.Content>
          </Components.View>
        );
      }),
    },
  ],
});
