(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/closures.js":
/*!*************************!*\
  !*** ./pkg/closures.js ***!
  \*************************/
/*! exports provided: run, __widl_f_set_property_CSSStyleDeclaration, __widl_f_get_element_by_id_Document, __widl_f_set_inner_html_Element, __widl_instanceof_HTMLElement, __widl_f_style_HTMLElement, __widl_f_set_onclick_HTMLElement, __widl_instanceof_Window, __widl_f_document_Window, __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window, __wbg_new_ac67da782bbb7418, __wbg_forEach_7563ecb72745a11f, __wbg_push_c8cb0f1317bbcf3b, __wbg_newnoargs_cfdef9286cf1c39a, __wbg_call_8ff1b6c7fba4f641, __wbg_new0_a4d9e9d0807dc76e, __wbg_toLocaleString_9209f056ba833ad1, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_cb_drop, __wbindgen_cb_forget, __wbindgen_jsval_eq, __wbindgen_rethrow, __wbindgen_throw, __wbindgen_closure_wrapper159, __wbindgen_closure_wrapper161, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_property_CSSStyleDeclaration\", function() { return __widl_f_set_property_CSSStyleDeclaration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_inner_html_Element\", function() { return __widl_f_set_inner_html_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLElement\", function() { return __widl_instanceof_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_style_HTMLElement\", function() { return __widl_f_style_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_onclick_HTMLElement\", function() { return __widl_f_set_onclick_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window\", function() { return __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_ac67da782bbb7418\", function() { return __wbg_new_ac67da782bbb7418; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_forEach_7563ecb72745a11f\", function() { return __wbg_forEach_7563ecb72745a11f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_push_c8cb0f1317bbcf3b\", function() { return __wbg_push_c8cb0f1317bbcf3b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_cfdef9286cf1c39a\", function() { return __wbg_newnoargs_cfdef9286cf1c39a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8ff1b6c7fba4f641\", function() { return __wbg_call_8ff1b6c7fba4f641; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_a4d9e9d0807dc76e\", function() { return __wbg_new0_a4d9e9d0807dc76e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_toLocaleString_9209f056ba833ad1\", function() { return __wbg_toLocaleString_9209f056ba833ad1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper159\", function() { return __wbindgen_closure_wrapper159; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper161\", function() { return __wbindgen_closure_wrapper161; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _closures_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closures_bg */ \"./pkg/closures_bg.wasm\");\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __widl_f_set_property_CSSStyleDeclaration(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    let varg3 = getStringFromWasm(arg3, arg4);\n    try {\n        getObject(arg0).setProperty(varg1, varg3);\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = getObject(arg0).getElementById(varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_get_element_by_id_Document` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_f_set_inner_html_Element(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).innerHTML = varg1;\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_set_inner_html_Element` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_instanceof_HTMLElement(idx) { return getObject(idx) instanceof HTMLElement ? 1 : 0; }\n\nfunction __widl_f_style_HTMLElement(arg0) {\n    try {\n        return addHeapObject(getObject(arg0).style);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_style_HTMLElement` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_f_set_onclick_HTMLElement(arg0, arg1) {\n    try {\n        getObject(arg0).onclick = getObject(arg1);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_set_onclick_HTMLElement` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }\n\nfunction __widl_f_document_Window(arg0) {\n    try {\n\n        const val = getObject(arg0).document;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__widl_f_document_Window` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window(arg0, arg1, arg2, exnptr) {\n    try {\n        return getObject(arg0).setInterval(getObject(arg1), arg2);\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_new_ac67da782bbb7418() {\n    try {\n        return addHeapObject(new Array());\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_new_ac67da782bbb7418` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nfunction __wbg_forEach_7563ecb72745a11f(arg0, arg1, arg2) {\n    let cbarg1 = function(arg0, arg1, arg2) {\n        let a = this.a;\n        this.a = 0;\n        _assertNum(arg1);\n        try {\n            return this.f(a, this.b, addHeapObject(arg0), arg1, addHeapObject(arg2));\n\n        } finally {\n            this.a = a;\n\n        }\n\n    };\n    cbarg1.f = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(63);\n    cbarg1.a = arg1;\n    cbarg1.b = arg2;\n    try {\n        try {\n            getObject(arg0).forEach(cbarg1.bind(cbarg1));\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error\n                    ? `${e.message}\n\n                Stack:\n                ${e.stack}`\n                    : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function `__wbg_forEach_7563ecb72745a11f` that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n} finally {\n    cbarg1.a = cbarg1.b = 0;\n\n}\n}\n\nfunction __wbg_push_c8cb0f1317bbcf3b(arg0, arg1) {\n    try {\n        return getObject(arg0).push(getObject(arg1));\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_push_c8cb0f1317bbcf3b` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __wbg_newnoargs_cfdef9286cf1c39a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new Function(varg0));\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_newnoargs_cfdef9286cf1c39a` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __wbg_call_8ff1b6c7fba4f641(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_new0_a4d9e9d0807dc76e() {\n    try {\n        return addHeapObject(new Date());\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_new0_a4d9e9d0807dc76e` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __wbg_toLocaleString_9209f056ba833ad1(arg0, arg1, arg2, arg3) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(getObject(arg0).toLocaleString(varg1, getObject(arg3)));\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error\n                ? `${e.message}\n\n            Stack:\n            ${e.stack}`\n                : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function `__wbg_toLocaleString_9209f056ba833ad1` that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n}\n\nfunction __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            arg = arg.slice(offset);\n            ptr = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + arg.length * 3);\n            const view = getUint8Memory().subarray(ptr + offset, ptr + size);\n            const ret = cachedTextEncoder.encodeInto(arg, view);\n            if (ret.read != arg.length) throw new Error('failed to pass whole string');\n            offset += ret.written;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            const buf = cachedTextEncoder.encode(arg.slice(offset));\n            ptr = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + buf.length);\n            getUint8Memory().set(buf, ptr + offset);\n            offset += buf.length;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nfunction __wbindgen_debug_string(i, len_ptr) {\n    const debug_str =\n    val => {\n        // primitive types\n        const type = typeof val;\n        if (type == 'number' || type == 'boolean' || val == null) {\n            return  `${val}`;\n        }\n        if (type == 'string') {\n            return `\"${val}\"`;\n        }\n        if (type == 'symbol') {\n            const description = val.description;\n            if (description == null) {\n                return 'Symbol';\n            } else {\n                return `Symbol(${description})`;\n            }\n        }\n        if (type == 'function') {\n            const name = val.name;\n            if (typeof name == 'string' && name.length > 0) {\n                return `Function(${name})`;\n            } else {\n                return 'Function';\n            }\n        }\n        // objects\n        if (Array.isArray(val)) {\n            const length = val.length;\n            let debug = '[';\n            if (length > 0) {\n                debug += debug_str(val[0]);\n            }\n            for(let i = 1; i < length; i++) {\n                debug += ', ' + debug_str(val[i]);\n            }\n            debug += ']';\n            return debug;\n        }\n        // Test for built-in\n        const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n        let className;\n        if (builtInMatches.length > 1) {\n            className = builtInMatches[1];\n        } else {\n            // Failed to match the standard '[object ClassName]'\n            return toString.call(val);\n        }\n        if (className == 'Object') {\n            // we're a user defined class or Object\n            // JSON.stringify avoids problems with cycles, and is generally much\n            // easier than looping through ownProperties of `val`.\n            try {\n                return 'Object(' + JSON.stringify(val) + ')';\n            } catch (_) {\n                return 'Object';\n            }\n        }\n        // errors\n        if (val instanceof Error) {\n        return `${val.name}: ${val.message}\n        ${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n;\nconst toString = Object.prototype.toString;\nconst val = getObject(i);\nconst debug = debug_str(val);\nconst ptr = passStringToWasm(debug);\ngetUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\nreturn ptr;\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = takeObject(i).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nconst __wbindgen_cb_forget = dropObject;\n\nfunction __wbindgen_jsval_eq(a, b) { return getObject(a) === getObject(b) ? 1 : 0; }\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction __wbindgen_closure_wrapper159(a, b, _ignored) {\n    const f = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(22);\n    const d = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(23);\n    const cb = function() {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b);\n\n        } finally {\n            if (--this.cnt === 0) d(a, b);\n            else this.a = a;\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_closure_wrapper161(a, b, _ignored) {\n    const f = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(20);\n    const d = _closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(21);\n    const cb = function() {\n        this.cnt++;\n        try {\n            return f(this.a, b);\n\n        } finally {\n        if (--this.cnt === 0) { d(this.a, b); this.a = 0; }\n\n    }\n\n};\ncb.a = a;\ncb.cnt = 1;\nlet real = cb.bind(cb);\nreal.original = cb;\nreturn addHeapObject(real);\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_closures_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/closures.js?");

/***/ }),

/***/ "./pkg/closures_bg.wasm":
/*!******************************!*\
  !*** ./pkg/closures_bg.wasm ***!
  \******************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./closures */ \"./pkg/closures.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/closures_bg.wasm?");

/***/ })

}]);