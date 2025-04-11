import { defineComponent, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, renderSlot, toRef, computed, ref, watch, toRaw, useId as useId$1, inject, useSSRContext } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderStyle } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { twJoin } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import { _ as __nuxt_component_2$2, u as useUI, a as __nuxt_component_0$3, b as useInjectButtonGroup } from './Badge-B2uP15Sh.mjs';
import { t as twMerge, m as mergeConfig, g as get, a as appConfig } from './server.mjs';
import { useVModel, useDebounceFn } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/@vueuse/core/index.mjs';
import { defu } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/defu/dist/defu.mjs';
import { _ as __nuxt_component_0$4 } from './nuxt-link-D9Myo3xA.mjs';
import { isEqual, diff } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/ohash/dist/index.mjs';
import { upperFirst } from 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/scule/dist/index.mjs';
import './index-Djzsf1ku.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/klona/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/radix3/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/ebtihaj/Documents/ebtihaj.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$e = {
  __name: "SectionTitle",
  __ssrInlineRender: true,
  props: ["title", "icon"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-2xl mb-4" }, _attrs))}>${ssrInterpolate(props.title)}</h1>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitle.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_SectionTitle = _sfc_main$e;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "profile",
    class: "mb-8 md:mb-12 xl:mb-16 text-sm print:text-xs"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "Technical Product Manager \u2013 Data, GIS & HealthTech",
    icon: "user"
  }, null, _parent));
  _push(`<p class="mb-4"> I am a data-driven Product Manager with <strong>8+ years</strong> of experience, passionate about developing solutions that solve real-life problems through technology. From citizen-centric tech to tackling pressing health issues, I&#39;ve shipped over 30 digital products across public, private, and nonprofit sectors. </p><p class="mb-4"> Currently, I&#39;m tackling a critical challenge in the global health sector with a Gates Foundation-backed program. I&#39;m spearheading the development of a data-driven GIS-based product that has the potential to impact millions of lives. </p><p class="mb-4"> What sets me apart? </p><p class="mb-4"><ol><li> 1. Passion for impact: I don&#39;t just build products, I build products that matter. My social conscience fuels my drive to create solutions that address real-world challenges.</li><li>2. Data-driven decision-making: Numbers are my friends! I leverage data analysis to inform every step of the product development process, ensuring we build what users truly need.</li><li>3. Collaborative leadership: I believe in the power of cross-functional teams. I bring everyone to the table, fostering a culture of open communication and shared ownership.</li></ol></p><p class="mb-4"><br> More than products, I build solutions that empower people and leave a lasting impact. Connect with me to chat about innovation, data, and harnessing technology for good! </p></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  caption: "sr-only",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    expanded: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  expand: {
    icon: "transform transition-transform duration-200"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    expandButton: {
      icon: "i-heroicons-chevron-down",
      color: "gray",
      variant: "ghost",
      size: "xs",
      class: "-my-1.5 align-middle"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      "xs": "h-0.5",
      "sm": "h-1",
      "md": "h-2",
      "lg": "h-3",
      "xl": "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    "carousel": "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    "swing": "bar-animation-swing",
    "elastic": "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$c = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$4);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Expertise",
  __ssrInlineRender: true,
  setup(__props) {
    const expertise = [
      "Product Strategy",
      "Product Lifecycle Management",
      "Product Documentation",
      "User Research & Discovery",
      " Data Analysis & Decision-Making",
      "Technical Fluency",
      "Execution & Delivery",
      "Stakeholder & Team Management"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UBadge = __nuxt_component_2$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "expertise",
        class: "my-8 md:my-12 xl:my-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Expertise",
        icon: "trophy"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", body: { padding: "sm:p-4" }, background: "bg-gray-100 dark:bg-gray-900", header: { padding: "pb-0" }, ring: "ring-0", shadow: "shadow-none" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(expertise, (item) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "white",
                class: "m-1",
                label: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(expertise, (item) => {
                return createVNode(_component_UBadge, {
                  color: "white",
                  class: "m-1",
                  label: item
                }, null, 8, ["label"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Expertise.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = {
      "Product Strategy": [
        "Product Lifecycle",
        "Roadmapping",
        "PRDs",
        "Go-to-Market",
        "Product Discovery",
        "OKRs"
      ],
      "User Research & UX": [
        "User Interviews",
        "Usability Testing",
        "JTBD",
        "Personas",
        "Journey Mapping",
        "Wireframing"
      ],
      "Data & Analysis": [
        "SQL",
        "Funnel Analysis",
        "A/B Testing",
        "Google Analytics",
        "Mixpanel",
        "Tableau",
        "Excel"
      ],
      "Agile & Delivery": [
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "Sprint Planning",
        "Backlog Grooming",
        "Release Management"
      ],
      "Tech Fluency": [
        "APIs",
        "REST",
        "JSON",
        "SQL",
        "PostgreSQL",
        "PostGIS",
        "Git"
      ],
      "Collaboration Tools": [
        "Slack",
        "Notion",
        "Miro",
        "Figma",
        "Trello",
        "Asana"
      ],
      "Stakeholder Management": [
        "Cross-functional Alignment",
        "Communication Plans",
        "Workshops",
        "Change Management"
      ],
      "Domain Expertise": [
        "B2B2C",
        "B2B",
        "B2C",
        "HealthTech",
        "GIS",
        "Humanitarian Tech",
        "Digital Infrastructure",
        "Citizen-Centric Tech",
        "Public Sector",
        "Non-Profit",
        "Startups"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UBadge = __nuxt_component_2$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "my-8 md:my-12 xl:my-16 print:break-before-page"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Skills",
        icon: "bug-ant"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", body: { padding: "sm:p-4" }, background: "bg-gray-100 dark:bg-gray-900", ring: "ring-0", shadow: "shadow-none" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12"${_scopeId}><!--[-->`);
            ssrRenderList(skills, (items, tech) => {
              _push2(`<!--[--><div class="col-span-2 font-semibold text-sm print:text-xs"${_scopeId}>${ssrInterpolate(tech)}: </div><div class="col-span-10"${_scopeId}><!--[-->`);
              ssrRenderList(items, (item) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "white",
                  class: "whitespace-nowrap m-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12" }, [
                (openBlock(), createBlock(Fragment, null, renderList(skills, (items, tech) => {
                  return openBlock(), createBlock(Fragment, null, [
                    createVNode("div", { class: "col-span-2 font-semibold text-sm print:text-xs" }, toDisplayString(tech) + ": ", 1),
                    createVNode("div", { class: "col-span-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                        return openBlock(), createBlock(_component_UBadge, {
                          color: "white",
                          class: "whitespace-nowrap m-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ])
                  ], 64);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup == null ? void 0 : formGroup.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup == null ? void 0 : formGroup.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const useId = useId$1;
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$9 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$3.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    var _a;
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config$3, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = (_a = _inputId.value) != null ? _a : useId();
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.checked);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help || _ctx.$slots.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">`);
      ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
        _push(`${ssrInterpolate(_ctx.help)}`);
      }, _push, _parent);
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
        if (q.type === "added") {
          filtered.push(q.key);
        }
        return filtered;
      }, []);
      return isEqual(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : void 0
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : void 0,
              onClick: (e) => !isExternal && !_ctx.disabled && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$7 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$3,
    ULink: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$2.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$2);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0;
  const _component_UIcon = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$6 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$1.default.animation,
      validator(value) {
        return Object.keys(config$1.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$1, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      var _a;
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        (_a = ui.value.progress.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.steps.base,
        (_a = ui.value.steps.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index2) {
      return index2 === Number(props.value);
    }
    function isFirst(index2) {
      return index2 === 0;
    }
    function stepClasses(index2) {
      index2 = Number(index2);
      const classes = [stepClass.value];
      if (isFirst(index2)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index2)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    role: "progressbar"
  }, _attrs))} data-v-157fbd8e>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-157fbd8e><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-157fbd8e>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({
    "aria-valuemax": _ctx.realMax,
    "aria-valuenow": _ctx.value,
    class: _ctx.progressClass
  }, { value: _ctx.value, max: _ctx.realMax, ..._ctx.attrs }))} data-v-157fbd8e>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-157fbd8e><!--[-->`);
    ssrRenderList(_ctx.max, (step, index2) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index2))}" data-v-157fbd8e>`);
      ssrRenderSlot(_ctx.$slots, `step-${index2}`, mergeProps({ ref_for: true }, { step }), () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-157fbd8e"]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a, z) {
  return isEqual(a, z);
}
function defaultSort(a, b, direction) {
  if (a === b) {
    return 0;
  }
  if (direction === "asc") {
    return a < b ? -1 : 1;
  } else {
    return a > b ? -1 : 1;
  }
}
function getStringifiedSet(arr) {
  return new Set(arr.map((item) => JSON.stringify(item)));
}
function accessor(key) {
  return (obj) => get(obj, key);
}
const _sfc_main$5 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$3,
    UButton: __nuxt_component_1,
    UProgress: __nuxt_component_2$1,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config.default.sortDescIcon
    },
    expandButton: {
      type: Object,
      default: () => config.default.expandButton
    },
    expand: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config.default.emptyState
    },
    caption: {
      type: String,
      default: null
    },
    progress: {
      type: Object,
      default: () => config.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    multipleExpand: {
      type: Boolean,
      default: true
    },
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:sort", "update:expand", "select:all"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config, toRef(props, "class"));
    const columns = computed(() => {
      var _a;
      const defaultColumns = (_a = props.columns) != null ? _a : Object.keys(props.rows[0]).map((key) => ({
        key,
        label: upperFirst(key),
        sortable: false,
        class: void 0,
        sort: defaultSort
      }));
      const hasColumnSelect = defaultColumns.find((v) => v.key === "select");
      if (hasColumnSelect || !props.modelValue) {
        return defaultColumns;
      }
      return [{
        key: "select",
        sortable: false,
        class: void 0,
        sort: defaultSort
      }, ...defaultColumns];
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const expand = useVModel(props, "expand", emit, {
      passive: true,
      defaultValue: defu({}, props.expand, {
        openedRows: [],
        row: null
      })
    });
    const retriggerSlot = ref(null);
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column) || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a, b) => {
        var _a3;
        var _a2;
        const aValue = get(a, column);
        const bValue = get(b, column);
        const sort2 = (_a3 = (_a2 = columns.value.find((col) => col.key === column)) == null ? void 0 : _a2.sort) != null ? _a3 : defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const totalRows = computed(() => props.rows.length);
    const countCheckedRow = computed(() => {
      const selectedData = getStringifiedSet(selected.value);
      const rowsData = getStringifiedSet(props.rows);
      return Array.from(selectedData).filter((item) => rowsData.has(item)).length;
    });
    const indeterminate = computed(() => {
      if (!selected.value || !props.rows) return false;
      return countCheckedRow.value > 0 && countCheckedRow.value < totalRows.value;
    });
    const isAllRowChecked = computed(() => countCheckedRow.value === totalRows.value);
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null) return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a, z) {
      if (typeof props.by === "string") {
        const accesorFn = accessor(props.by);
        return accesorFn(a) === accesorFn(z);
      }
      return props.by(a, z);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      const selection = (void 0).getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function onContextmenu(event, row) {
      if (!$attrs.onContextmenu) {
        return;
      }
      $attrs.onContextmenu(event, row);
    }
    function selectAllRows() {
      const newSelected = [...selected.value];
      props.rows.forEach((row) => {
        if (!isSelected(row)) {
          newSelected.push(row);
        }
      });
      selected.value = newSelected;
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
      emit("select:all", checked);
    }
    function onChangeCheckbox(checked, row) {
      if (checked) {
        selected.value = props.singleSelect ? [row] : [...selected.value, row];
      } else {
        selected.value = selected.value.filter((value) => !compare(toRaw(value), toRaw(row)));
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    function isExpanded(row) {
      var _a;
      return ((_a = expand.value) == null ? void 0 : _a.openedRows) ? expand.value.openedRows.some((openedRow) => compare(openedRow, row)) : false;
    }
    function toggleOpened(row) {
      expand.value = {
        openedRows: isExpanded(row) ? expand.value.openedRows.filter((v) => !compare(v, row)) : props.multipleExpand ? [...expand.value.openedRows, row] : [row],
        row
      };
    }
    function getAriaSort(column) {
      if (!column.sortable) {
        return void 0;
      }
      if (sort.value.column !== column.key) {
        return "none";
      }
      if (sort.value.direction === "asc") {
        return "ascending";
      }
      if (sort.value.direction === "desc") {
        return "descending";
      }
      return void 0;
    }
    watch(rows, () => {
      retriggerSlot.value = /* @__PURE__ */ new Date();
    }, {
      deep: true
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isAllRowChecked,
      onChangeCheckbox,
      isSelected,
      onSort,
      onSelect,
      onContextmenu,
      onChange,
      getRowData,
      toggleOpened,
      getAriaSort,
      isExpanded,
      retriggerSlot
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_1;
  const _component_UProgress = __nuxt_component_2$1;
  const _component_UIcon = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}">`);
  if (_ctx.$slots.caption || _ctx.caption) {
    ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
      _push(`<caption class="${ssrRenderClass(_ctx.ui.caption)}">${ssrInterpolate(_ctx.caption)}</caption>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.expand) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.tr.base)}"><span class="sr-only">Expand</span></th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index2) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.key === "select" && _ctx.ui.checkbox.padding, column.class])}"${ssrRenderAttr("aria-sort", _ctx.getAriaSort(column))}>`);
    if (!_ctx.singleSelect && _ctx.modelValue && column.key === "select") {
      ssrRenderSlot(_ctx.$slots, "select-header", {
        indeterminate: _ctx.indeterminate,
        checked: _ctx.isAllRowChecked,
        change: _ctx.onChange
      }, () => {
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          "model-value": _ctx.isAllRowChecked,
          indeterminate: _ctx.indeterminate,
          ref_for: true
        }, _ctx.ui.default.checkbox, {
          "aria-label": "Select all",
          onChange: _ctx.onChange
        }), null, _parent));
      }, _push, _parent);
    } else {
      ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
        column,
        sort: _ctx.sort,
        onSort: _ctx.onSort
      }, () => {
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
            icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
            label: column[_ctx.columnAttribute],
            onClick: ($event) => _ctx.onSort(column)
          }), null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
        }
      }, _push, _parent);
    }
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index2) => {
      _push(`<!--[--><tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.isExpanded(row) && _ctx.ui.tr.expanded, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row == null ? void 0 : row.class])}">`);
      if (_ctx.expand) {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        if (_ctx.$slots["expand-action"]) {
          ssrRenderSlot(_ctx.$slots, "expand-action", {
            row,
            isExpanded: _ctx.isExpanded(row),
            toggle: () => _ctx.toggleOpened(row)
          }, null, _push, _parent);
        } else {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            disabled: row.disabledExpand,
            ref_for: true
          }, { ..._ctx.ui.default.expandButton || {}, ..._ctx.expandButton }, {
            ui: { icon: { base: [_ctx.ui.expand.icon, _ctx.isExpanded(row) && "rotate-180"].join(" ") } },
            onClick: ($event) => _ctx.toggleOpened(row)
          }), null, _parent));
        }
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        var _a;
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, column == null ? void 0 : column.rowClass, (_a = row[column.key]) == null ? void 0 : _a.class, column.key === "select" && _ctx.ui.checkbox.padding])}">`);
        if (_ctx.modelValue && column.key === "select") {
          ssrRenderSlot(_ctx.$slots, "select-data", {
            checked: _ctx.isSelected(row),
            change: (ev) => _ctx.onChangeCheckbox(ev, row)
          }, () => {
            _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
              "model-value": _ctx.isSelected(row),
              ref_for: true
            }, _ctx.ui.default.checkbox, {
              "aria-label": "Select row",
              onChange: ($event) => _ctx.onChangeCheckbox($event, row)
            }), null, _parent));
          }, _push, _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
            key: _ctx.retriggerSlot,
            column,
            row,
            index: index2,
            getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
          }, () => {
            _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
          }, _push, _parent);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
      if (_ctx.isExpanded(row)) {
        _push(`<tr><td colspan="100%">`);
        ssrRenderSlot(_ctx.$slots, "expand", {
          row,
          index: index2
        }, null, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Education",
  __ssrInlineRender: true,
  setup(__props) {
    const education = [
      {
        "period": "2014 - 2020",
        "degree": "Masters of Science",
        "major": "Computer Sciences",
        "university": "University of Engineering and Technology"
      },
      {
        "period": "2010 - 2014",
        "degree": "Bachelors of Science",
        "major": "Computer Science",
        "university": "University of Engineering and Technology"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UTable = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "education",
        class: "my-8 md:my-12 xl:my-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Education",
        icon: "book-open"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", background: "bg-gray-100 dark:bg-gray-900", body: { padding: "" }, header: { padding: "pb-0" }, ring: "ring-0", shadow: "shadow-none" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              rows: education,
              ui: { td: { padding: "py-2", size: "text-sm print:text-xs", color: "" } }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                rows: education,
                ui: { td: { padding: "py-2", size: "text-sm print:text-xs", color: "" } }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Education.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Employment",
  __ssrInlineRender: true,
  setup(__props) {
    const employment = [
      {
        "period": "2022 - Present",
        "designation": "Senior Product Manager",
        "organization": "Rayn Group",
        "sector": "Private"
      },
      {
        "period": "2016 - 2022",
        "designation": "Government Innovation Lead (Product)",
        "organization": "Code for Pakistan",
        "sector": "Development"
      },
      {
        "period": "2015 - 2016",
        "designation": "Business Innovation Officer",
        "organization": "The Nerd Camp",
        "sector": "Private"
      },
      {
        "period": "2014 - 2015",
        "designation": "Software Engineer",
        "organization": "Sweet Pixel Studios",
        "sector": "Private"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UTable = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "employment",
        class: "my-8 md:my-12 xl:my-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Employment",
        icon: "building-office"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", background: "bg-gray-100 dark:bg-gray-900", body: { padding: "" }, header: { padding: "pb-0" }, ring: "ring-0", shadow: "shadow-none" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              rows: employment,
              ui: { td: { padding: "py-2", size: "text-sm print:text-xs", color: "" } }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                rows: employment,
                ui: { td: { padding: "py-2", size: "text-sm print:text-xs", color: "" } }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Employment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    const experience = [
      {
        "period": "February 2022 till date",
        "organization": "Rayn Group",
        "designation": "Senior Product Manager",
        "introduction": "Rayn is on a mission to leverage cutting-edge technology and large-scale program implementation to solve some of the most critical public sector challenges in Pakistan.",
        "contributions": [
          "Led the development of ML-powered GIS analytics systems, increasing automation in identifying unvisited areas by 87%.",
          "Built GIS-driven spatial intelligence solutions for real-time public health interventions, boosting vaccination coverage by 25%.",
          "Designed and implemented geofencing ML based models, enhancing workforce tracking and security compliance through automated timestamped movement logs",
          "Helped manage key accounts and stakeholders, including WHO, Gates Foundation, and government agencies, aligning product goals with global health initiatives.",
          "Developed and maintained a comprehensive product roadmap, ensuring alignment with strategic objectives and market trends."
        ]
      },
      {
        "period": "October 2016 - January 2022",
        "organization": "Code for Pakistan",
        "designation": "Government Innovation Lead",
        "introduction": "Tech for Change is a civic innovation non-profit made up of a passionate community of technologists and talented professionals, driven by a strong belief in civic innovation and social impact that can move Pakistan forward in measurable and meaningful ways.",
        "contributions": [
          "Led product development and user testing of civic tech solutions, achieving 80%+ adoption rates across 20 government departments.",
          "Managed strategic partnerships with the World Bank, Ministry of National Health Services Regulations and Coordination, Khyber Pakhtunkhwa Information Technology Board, and the Punjab Information Technology Board securing funding and scaling digital solutions.",
          "Conducted workshops and training sessions for government officials, empowering them to leverage technology for better governance and service delivery."
        ]
      },
      {
        "period": "October 2015 - September 2016",
        "organization": "The Nerd Camp",
        "designation": "Business Innovation Officer",
        "introduction": "The Nerd Camp is a for-profit organization that provides training and resources to help people learn to code and build their own apps.",
        "contributions": [
          "Developed and implemented a comprehensive business strategy for The Nerd Camp, focusing on growth and expansion of the organization.",
          "Managed client relationships and partnerships, ensuring high levels of customer satisfaction and retention.",
          "Led the development of new business opportunities and partnerships, resulting in increased revenue and market share."
        ]
      },
      {
        "period": "April 2014 - October 2015",
        "organization": "Sweet Pixel Studios",
        "designation": "Software Engineer",
        "introduction": "Sweet Pixel Studios is an indie game development agency.",
        "contributions": [
          "Developed and maintained various indie games and apps, including a mobile game called 'Pixel Fall'.",
          "Managed client relationships and partnerships, ensuring high levels of customer satisfaction and retention.",
          "Integrated gaming analytics, improving user engagement and retention."
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UBadge = __nuxt_component_2$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "my-8 md:my-12 xl:my-16",
        id: "experience"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Experience",
        icon: "briefcase"
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-1"><!--[-->`);
      ssrRenderList(experience, (item) => {
        _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", background: "bg-gray-100 dark:bg-gray-900", body: { base: "text-sm print:text-xs", padding: "p2" }, header: { padding: "pb-0" }, ring: "ring-0", shadow: "shadow-none" } }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex"${_scopeId}><h2 class="font-semibold flex-1"${_scopeId}>${ssrInterpolate(item.organization)}</h2>`);
              _push2(ssrRenderComponent(_component_UBadge, { color: "white" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.period)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.period), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex" }, [
                  createVNode("h2", { class: "font-semibold flex-1" }, toDisplayString(item.organization), 1),
                  createVNode(_component_UBadge, { color: "white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.period), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mb-4"${_scopeId}>${ssrInterpolate(item.introduction)}</p><ul class="list-disc ps-4"${_scopeId}><!--[-->`);
              ssrRenderList(item.contributions, (contribution) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(contribution)}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode("p", { class: "mb-4" }, toDisplayString(item.introduction), 1),
                createVNode("ul", { class: "list-disc ps-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(item.contributions, (contribution) => {
                    return openBlock(), createBlock("li", null, toDisplayString(contribution), 1);
                  }), 256))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        "period": "September 2024 - Present",
        "organization": "Rayn Group",
        "project": "Digital Information Systems for PEI (DISP)",
        "description": "Leading the design and development of DISP, a mobile application aimed at digitizing data collection for polio eradication campaigns.",
        "bullets": [
          "Replaces manual tally sheets with a robust digital workflow, improving efficiency, accuracy, and real-time decision-making for frontline vaccination teams.",
          "Ensures data integrity and faster reporting, enabling quicker response from health officials and campaign planners.",
          "Working closely with field teams, UX designers, and engineers to build a user-friendly solution tailored for use in low-connectivity environments."
        ]
      },
      {
        "period": "February 2022 - September 2024",
        "organization": "Rayn Group",
        "project": "Geographical Coverage Support System (GCSS)",
        "description": "As the Product Manager for GCSS, I worked closely with engineers, data teams, and health program stakeholders to define product requirements, map workflows, and prioritize features. The platform allows managers to track polio teams and supervisors in real time, identify missed or persistently uncovered areas, and catch issues like irregular vaccination patterns or non-compliance with SOPs.",
        "bullets": [
          "Developed a comprehensive system for monitoring and analyzing polio vaccination coverage across Pakistan.",
          "Implemented real-time tracking of vaccination teams and supervisors to ensure efficient operations.",
          "Created a tool for identifying areas with low vaccination rates and potential coverage gaps.",
          "Designed a platform for monitoring vaccination compliance and SOP adherence."
        ]
      },
      {
        "period": "February 2022 - September 2024",
        "organization": "Rayn Group",
        "project": "ML Based Model to Identify Team Support Centers",
        "description": "In this project, I led the product development of an ML-based model designed to identify Team Support Centers (TSCs)\u2014the physical locations where polio vaccinators begin and end their day. The goal was to use data more intelligently to understand field team movements, workloads, and overall performance.",
        "bullets": [
          "ML model to detect ingress and egress movement patterns of vaccinators.",
          "Automatic detection of start and end points of daily vaccinator routes.",
          "Mapping of TSCs to actual field behavior (vs. planned deployment points)."
        ]
      },
      {
        "period": "February 2022 - September 2024",
        "organization": "Rayn Group",
        "project": "xLATS",
        "description": "In this project, I led the product vision and delivery of xLATS, a custom-built platform for AgriTech startups to monitor and manage their field operations, farmer onboarding, and geospatial farm data. I worked closely with engineering and GIS teams to define use cases, design workflows, and prioritize features that would support both business users and farmers in making data-driven agricultural decisions.",
        "bullets": [
          "Custom-built platform for AgriTech startups to monitor and manage their field operations, farmer onboarding, and geospatial farm data.",
          "Designed workflows and prioritized features that would support both business users and farmers in making data-driven agricultural decisions."
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = _sfc_main$e;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UBadge = __nuxt_component_2$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "my-8 md:my-12 xl:my-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Projects",
        icon: "document-check"
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-1"><!--[-->`);
      ssrRenderList(projects, (item) => {
        _push(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-none", background: "bg-gray-100 dark:bg-gray-900", body: { base: "text-sm print:text-xs" }, header: { padding: "pb-0" }, ring: "ring-0", shadow: "shadow-none" } }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="font-semibold col-span-8"${_scopeId}>${ssrInterpolate(item.project)}</h2><div class="flex gap-1 mt-2 text-sm"${_scopeId}><span class="flex-1"${_scopeId}>${ssrInterpolate(item.organization)}</span>`);
              _push2(ssrRenderComponent(_component_UBadge, { color: "white" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.period)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.period), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("h2", { class: "font-semibold col-span-8" }, toDisplayString(item.project), 1),
                createVNode("div", { class: "flex gap-1 mt-2 text-sm" }, [
                  createVNode("span", { class: "flex-1" }, toDisplayString(item.organization), 1),
                  createVNode(_component_UBadge, { color: "white" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.period), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-2"${_scopeId}><p class="text-gray-600"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
              if (item.bullets) {
                _push2(`<ul class="mt-2 space-y-1 text-gray-600 pl-4"${_scopeId}><!--[-->`);
                ssrRenderList(item.bullets, (bullet, index2) => {
                  _push2(`<li class="list-disc"${_scopeId}>${ssrInterpolate(bullet)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(item.description), 1),
                  item.bullets ? (openBlock(), createBlock("ul", {
                    key: 0,
                    class: "mt-2 space-y-1 text-gray-600 pl-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.bullets, (bullet, index2) => {
                      return openBlock(), createBlock("li", {
                        key: index2,
                        class: "list-disc"
                      }, toDisplayString(bullet), 1);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Profile = __nuxt_component_0$2;
  const _component_Expertise = _sfc_main$b;
  const _component_Skills = _sfc_main$a;
  const _component_Education = _sfc_main$4;
  const _component_Employment = _sfc_main$3;
  const _component_Experience = _sfc_main$2;
  const _component_Projects = _sfc_main$1;
  _push(`<article${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Profile, null, null, _parent));
  _push(ssrRenderComponent(_component_Expertise, null, null, _parent));
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(ssrRenderComponent(_component_Education, null, null, _parent));
  _push(ssrRenderComponent(_component_Employment, null, null, _parent));
  _push(ssrRenderComponent(_component_Experience, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DUIKDOk2.mjs.map
