(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/performance.js":
/*!****************************!*\
  !*** ./pkg/performance.js ***!
  \****************************/
/*! exports provided: __wbg_log_2f31b209cebeaf7d, run, __widl_f_now_Performance, __widl_f_timing_Performance, __widl_f_request_start_PerformanceTiming, __widl_f_response_end_PerformanceTiming, __widl_instanceof_Window, __widl_f_performance_Window, __wbg_newnoargs_cfdef9286cf1c39a, __wbg_call_8ff1b6c7fba4f641, __wbindgen_throw, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2f31b209cebeaf7d\", function() { return __wbg_log_2f31b209cebeaf7d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_now_Performance\", function() { return __widl_f_now_Performance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_timing_Performance\", function() { return __widl_f_timing_Performance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_request_start_PerformanceTiming\", function() { return __widl_f_request_start_PerformanceTiming; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_response_end_PerformanceTiming\", function() { return __widl_f_response_end_PerformanceTiming; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_performance_Window\", function() { return __widl_f_performance_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_cfdef9286cf1c39a\", function() { return __wbg_newnoargs_cfdef9286cf1c39a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8ff1b6c7fba4f641\", function() { return __wbg_call_8ff1b6c7fba4f641; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _performance_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance_bg */ \"./pkg/performance_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_2f31b209cebeaf7d(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        console.log(varg0);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_log_2f31b209cebeaf7d` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_now_Performance(arg0) {\n    try {\n        return getObject(arg0).now();\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_now_Performance` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __widl_f_timing_Performance(arg0) {\n    try {\n        return addHeapObject(getObject(arg0).timing);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_timing_Performance` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_f_request_start_PerformanceTiming(arg0) {\n    try {\n        return getObject(arg0).requestStart;\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_request_start_PerformanceTiming` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_f_response_end_PerformanceTiming(arg0) {\n    try {\n        return getObject(arg0).responseEnd;\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_response_end_PerformanceTiming` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_performance_Window(arg0) {\n    try {\n\n        const val = getObject(arg0).performance;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_performance_Window` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __wbg_newnoargs_cfdef9286cf1c39a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new Function(varg0));\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_newnoargs_cfdef9286cf1c39a` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __wbg_call_8ff1b6c7fba4f641(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_performance_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/performance.js?");

/***/ }),

/***/ "./pkg/performance_bg.wasm":
/*!*********************************!*\
  !*** ./pkg/performance_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./performance */ \"./pkg/performance.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/performance_bg.wasm?");

/***/ })

}]);