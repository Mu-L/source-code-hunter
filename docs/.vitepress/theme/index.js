import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk(
      {
        repo: "doocs/source-code-hunter",
        category: "Announcements",
        categoryId: "DIC_kwDODP2NQc4CpG9T",
        repoId: "MDEwOlJlcG9zaXRvcnkyMTc5NDMzNjE=",
        mapping: "pathname",
        inputPosition: "top",
        lang: "zh-CN",
        homePageShowComment: true,
        term: "9",
        strict: "0",
        reactionsEnabled: "1",
        loading: "lazy",
        lightTheme: "light",
        darkTheme: "transparent_dark",
      },
      {
        frontmatter,
        route,
      },
      true
    );
  },
};