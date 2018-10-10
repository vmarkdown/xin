module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(2);
var xtend = __webpack_require__(3);
var Parser = __webpack_require__(5);

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
    var Local = unherit(Parser);
    Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
    this.Parser = Local;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(3)
var inherits = __webpack_require__(4)

module.exports = unherit

/* Create a custom constructor which can be modified
 * without affecting the original class. */
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  /* Clone values. */
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  /* Constructor accepting a single argument,
   * which itself is an `arguments` object. */
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  /* Constructor accepting variadic arguments. */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(3);
var toggle = __webpack_require__(6);
var vfileLocation = __webpack_require__(7);
var unescape = __webpack_require__(8);
var decode = __webpack_require__(9);
var tokenizer = __webpack_require__(18);

module.exports = Parser;

function Parser(doc, file) {
    // console.log('Parser')
    this.file = file;
    this.offset = {};
    this.options = xtend(this.options);
    this.setOptions({});

    this.inList = false;
    this.inBlock = false;
    this.inLink = false;
    this.atStart = true;

    this.toOffset = vfileLocation(file).toOffset;
    this.unescape = unescape(this, 'escape');
    this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(19);
proto.parse = __webpack_require__(23);

/* Expose `defaults`. */
proto.options = __webpack_require__(21);

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
    ['thematicBreak'],
    ['atxHeading'],
    ['fencedCode'],
    ['blockquote'],
    ['html'],
    ['setextHeading', {commonmark: false}],
    ['definition', {commonmark: false}],
    ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
    ['atxHeading', {pedantic: false}],
    ['fencedCode', {pedantic: false}],
    ['thematicBreak', {pedantic: false}],
    ['definition', {commonmark: false}],
    ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
    ['indentedCode', {commonmark: true}],
    ['fencedCode', {commonmark: true}],
    ['atxHeading', {commonmark: true}],
    ['setextHeading', {commonmark: true}],
    ['thematicBreak', {commonmark: true}],
    ['html', {commonmark: true}],
    ['list', {commonmark: true}],
    ['definition', {commonmark: false}],
    ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
    newline: __webpack_require__(28),
    indentedCode: __webpack_require__(30),
    fencedCode: __webpack_require__(33),
    blockquote: __webpack_require__(36),
    atxHeading: __webpack_require__(39),
    thematicBreak: __webpack_require__(40),
    list: __webpack_require__(41),
    setextHeading: __webpack_require__(44),
    html: __webpack_require__(45),
    footnote: __webpack_require__(47),
    definition: __webpack_require__(50),
    table: __webpack_require__(51),
    paragraph: __webpack_require__(52)
};

proto.inlineTokenizers = {
    escape: __webpack_require__(53),
    autoLink: __webpack_require__(55),
    url: __webpack_require__(57),
    html: __webpack_require__(59),
    link: __webpack_require__(60),
    reference: __webpack_require__(62),
    strong: __webpack_require__(63),
    emphasis: __webpack_require__(65),
    deletion: __webpack_require__(68),
    code: __webpack_require__(70),
    break: __webpack_require__(72),
    text: __webpack_require__(74)
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
    var result = [];
    var key;

    for (key in value) {
        result.push(key);
    }

    return result;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

/* Construct a state `toggler`: a function which inverses
 * `property` in context based on its current value.
 * The by `toggler` returned function restores that value. */
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = factory

/* Factory. */
function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

/* Factory to get the line and column-based `position` for
 * `offset` in the bound indices. */
function offsetToPositionFactory(indices) {
  return offsetToPosition

  /* Get the line and column-based `position` for
   * `offset` in the bound indices. */
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

/* Factory to get the `offset` for a line and column-based
 * `position` in the bound indices. */
function positionToOffsetFactory(indices) {
  return positionToOffset

  /* Get the `offset` for a line and column-based
   * `position` in the bound indices. */
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

/* Get indices of line-breaks in `value`. */
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
    return unescape;

    /* De-escape a string using the expression at `key`
     * in `ctx`. */
    function unescape(value) {
        var prev = 0;
        var index = value.indexOf('\\');
        var escape = ctx[key];
        var queue = [];
        var character;

        while (index !== -1) {
            queue.push(value.slice(prev, index));
            prev = index + 1;
            character = value.charAt(prev);

            /* If the following character is not a valid escape,
             * add the slash. */
            if (!character || escape.indexOf(character) === -1) {
                queue.push('\\');
            }

            index = value.indexOf('\\', prev);
        }

        queue.push(value.slice(prev));

        return queue.join('');
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(3);
var entities = __webpack_require__(10);

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
    decoder.raw = decodeRaw;

    return decoder;

    /* Normalize `position` to add an `indent`. */
    function normalize(position) {
        var offsets = ctx.offset;
        var line = position.line;
        var result = [];

        while (++line) {
            if (!(line in offsets)) {
                break;
            }

            result.push((offsets[line] || 0) + 1);
        }

        return {
            start: position,
            indent: result
        };
    }

    /* Handle a warning.
     * See https://github.com/wooorm/parse-entities
     * for the warnings. */
    function handleWarning(reason, position, code) {
        if (code === 3) {
            return;
        }

        ctx.file.message(reason, position);
    }

    /* Decode `value` (at `position`) into text-nodes. */
    function decoder(value, position, handler) {
        entities(value, {
            position: normalize(position),
            warning: handleWarning,
            text: handler,
            reference: handler,
            textContext: ctx,
            referenceContext: ctx
        });
    }

    /* Decode `value` (at `position`) into a string. */
    function decodeRaw(value, position, options) {
        return entities(value, xtend(options, {
            position: normalize(position),
            warning: handleWarning
        }));
    }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(11)
var invalid = __webpack_require__(12)
var decimal = __webpack_require__(13)
var hexadecimal = __webpack_require__(14)
var alphanumerical = __webpack_require__(15)
var decodeEntity = __webpack_require__(17)

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

/* Default settings. */
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

/* Reference types. */
var NAMED = 'named'
var HEXADECIMAL = 'hexadecimal'
var DECIMAL = 'decimal'

/* Map of bases. */
var BASE = {}

BASE[HEXADECIMAL] = 16
BASE[DECIMAL] = 10

/* Map of types to tests. Each type of character reference
 * accepts different characters. This test is used to
 * detect whether a reference has ended (as the semicolon
 * is not strictly needed). */
var TESTS = {}

TESTS[NAMED] = alphanumerical
TESTS[DECIMAL] = decimal
TESTS[HEXADECIMAL] = hexadecimal

/* Warning messages. */
var NAMED_NOT_TERMINATED = 1
var NUMERIC_NOT_TERMINATED = 2
var NAMED_EMPTY = 3
var NUMERIC_EMPTY = 4
var NAMED_UNKNOWN = 5
var NUMERIC_DISALLOWED = 6
var NUMERIC_PROHIBITED = 7

var MESSAGES = {}

MESSAGES[NAMED_NOT_TERMINATED] =
  'Named character references must be terminated by a semicolon'
MESSAGES[NUMERIC_NOT_TERMINATED] =
  'Numeric character references must be terminated by a semicolon'
MESSAGES[NAMED_EMPTY] = 'Named character references cannot be empty'
MESSAGES[NUMERIC_EMPTY] = 'Numeric character references cannot be empty'
MESSAGES[NAMED_UNKNOWN] = 'Named character references must be known'
MESSAGES[NUMERIC_DISALLOWED] =
  'Numeric character references cannot be disallowed'
MESSAGES[NUMERIC_PROHIBITED] =
  'Numeric character references cannot be outside the permissible Unicode range'

/* Wrap to ensure clean parameters are given to `parse`. */
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

/* Parse entities. */
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  /* Cache the current point. */
  prev = now()

  /* Wrap `handleWarning`. */
  warning = handleWarning ? parseError : noop

  /* Ensure the algorithm walks over the first character
   * and the end (inclusive). */
  index--
  length++

  while (++index < length) {
    /* If the previous character was a newline. */
    if (character === '\n') {
      column = indent[lines] || 1
    }

    character = at(index)

    /* Handle anything other than an ampersand,
     * including newlines and EOF. */
    if (character !== '&') {
      if (character === '\n') {
        line++
        lines++
        column = 0
      }

      if (character) {
        queue += character
        column++
      } else {
        flush()
      }
    } else {
      following = at(index + 1)

      /* The behaviour depends on the identity of the next
       * character. */
      if (
        following === '\t' /* Tab */ ||
        following === '\n' /* Newline */ ||
        following === '\f' /* Form feed */ ||
        following === ' ' /* Space */ ||
        following === '<' /* Less-than */ ||
        following === '&' /* Ampersand */ ||
        following === '' ||
        (additional && following === additional)
      ) {
        /* Not a character reference. No characters
         * are consumed, and nothing is returned.
         * This is not an error, either. */
        queue += character
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      /* Numerical entity. */
      if (following !== '#') {
        type = NAMED
      } else {
        end = ++begin

        /* The behaviour further depends on the
         * character after the U+0023 NUMBER SIGN. */
        following = at(end)

        if (following === 'x' || following === 'X') {
          /* ASCII hex digits. */
          type = HEXADECIMAL
          end = ++begin
        } else {
          /* ASCII digits. */
          type = DECIMAL
        }
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = TESTS[type]
      end--

      while (++end < length) {
        following = at(end)

        if (!test(following)) {
          break
        }

        characters += following

        /* Check if we can match a legacy named
         * reference.  If so, we cache that as the
         * last viable named reference.  This
         * ensures we do not need to walk backwards
         * later. */
        if (type === NAMED && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = at(end) === ';'

      if (terminated) {
        end++

        namedEntity = type === NAMED ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        /* Empty. */
      } else if (!characters) {
        /* An empty (possible) entity is valid, unless
         * its numeric (thus an ampersand followed by
         * an octothorp). */
        if (type !== NAMED) {
          warning(NUMERIC_EMPTY, diff)
        }
      } else if (type === NAMED) {
        /* An ampersand followed by anything
         * unknown, and not terminated, is invalid. */
        if (terminated && !entity) {
          warning(NAMED_UNKNOWN, 1)
        } else {
          /* If theres something after an entity
           * name which is not known, cap the
           * reference. */
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          /* If the reference is not terminated,
           * warn. */
          if (!terminated) {
            reason = entityCharacters ? NAMED_NOT_TERMINATED : NAMED_EMPTY

            if (!settings.attribute) {
              warning(reason, diff)
            } else {
              following = at(end)

              if (following === '=') {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          /* All non-terminated numeric entities are
           * not rendered, and trigger a warning. */
          warning(NUMERIC_NOT_TERMINATED, diff)
        }

        /* When terminated and number, parse as
         * either hexadecimal or decimal. */
        reference = parseInt(characters, BASE[type])

        /* Trigger a warning when the parsed number
         * is prohibited, and replace with
         * replacement character. */
        if (prohibited(reference)) {
          warning(NUMERIC_PROHIBITED, diff)
          reference = '\uFFFD'
        } else if (reference in invalid) {
          /* Trigger a warning when the parsed number
           * is disallowed, and replace by an
           * alternative. */
          warning(NUMERIC_DISALLOWED, diff)
          reference = invalid[reference]
        } else {
          /* Parse the number. */
          output = ''

          /* Trigger a warning when the parsed
           * number should not be used. */
          if (disallowed(reference)) {
            warning(NUMERIC_DISALLOWED, diff)
          }

          /* Stringify the number. */
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      /* If we could not find a reference, queue the
       * checked characters (as normal characters),
       * and move the pointer to their end. This is
       * possible because we can be certain neither
       * newlines nor ampersands are included. */
      if (!reference) {
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      } else {
        /* Found it! First eat the queued
         * characters as normal text, then eat
         * an entity. */
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      }
    }
  }

  /* Return the reduced nodes, and any possible warnings. */
  return result.join('')

  /* Get current position. */
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  /* “Throw” a parse-error: a warning. */
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, MESSAGES[code], position, code)
  }

  /* Get character at position. */
  function at(position) {
    return value.charAt(position)
  }

  /* Flush `queue` (normal text). Macro invoked before
   * each entity and at the end of `value`.
   * Does nothing when `queue` is empty. */
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

/* Check if `character` is outside the permissible unicode range. */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/* Check if `character` is disallowed. */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = {"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"};

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = {"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

/* Check if the given character code, or the character
 * code at the first character, is decimal. */
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

/* Check if the given character code, or the character
 * code at the first character, is hexadecimal. */
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(16)
var decimal = __webpack_require__(13)

module.exports = alphanumerical

/* Check if the given character code, or the character
 * code at the first character, is alphanumerical. */
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

/* Check if the given character code, or the character
 * code at the first character, is alphabetical. */
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (&not - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (&semi;), we can
  // assume that the matching was incomplete
  if (char.slice(-1) === ';' && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

var MERGEABLE_NODES = {
    text: mergeText,
    blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
    var start;
    var end;

    if (node.type !== 'text' || !node.position) {
        return true;
    }

    start = node.position.start;
    end = node.position.end;

    /* Only merge nodes which occupy the same size as their
     * `value`. */
    return start.line !== end.line ||
        end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
    prev.value += node.value;

    return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
    if (this.options.commonmark) {
        return node;
    }

    prev.children = prev.children.concat(node.children);

    return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
    return tokenize;

    /* Tokenizer for a bound `type`. */
    function tokenize(value, location) {
        var self = this;
        var offset = self.offset;
        var tokens = [];
        var methods = self[type + 'Methods'];
        var tokenizers = self[type + 'Tokenizers'];
        var line = location.line;
        var column = location.column;
        var index;
        var length;
        var method;
        var name;
        var matched;
        var valueLength;

        /* Trim white space only lines. */
        if (!value) {
            return tokens;
        }

        /* Expose on `eat`. */
        eat.now = now;
        eat.file = self.file;

        /* Sync initial offset. */
        updatePosition('');

        /* Iterate over `value`, and iterate over all
         * tokenizers.  When one eats something, re-iterate
         * with the remaining value.  If no tokenizer eats,
         * something failed (should not happen) and an
         * exception is thrown. */
        while (value) {
            index = -1;
            length = methods.length;
            matched = false;

            while (++index < length) {
                name = methods[index];
                method = tokenizers[name];

                if (
                    method &&
                    /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
                    (!method.notInList || !self.inList) &&
                    (!method.notInBlock || !self.inBlock) &&
                    (!method.notInLink || !self.inLink)
                ) {
                    valueLength = value.length;

                    method.apply(self, [eat, value]);

                    matched = valueLength !== value.length;

                    if (matched) {
                        break;
                    }
                }
            }

            /* istanbul ignore if */
            if (!matched) {
                self.file.fail(new Error('Infinite loop'), eat.now());
            }
        }

        self.eof = now();

        // console.log(tokens);

        return tokens;

        /* Update line, column, and offset based on
         * `value`. */
        function updatePosition(subvalue) {
            var lastIndex = -1;
            var index = subvalue.indexOf('\n');

            while (index !== -1) {
                line++;
                lastIndex = index;
                index = subvalue.indexOf('\n', index + 1);
            }

            if (lastIndex === -1) {
                column += subvalue.length;
            } else {
                column = subvalue.length - lastIndex;
            }

            if (line in offset) {
                if (lastIndex !== -1) {
                    column += offset[line];
                } else if (column <= offset[line]) {
                    column = offset[line] + 1;
                }
            }
        }

        /* Get offset.  Called before the first character is
         * eaten to retrieve the range's offsets. */
        function getOffset() {
            var indentation = [];
            var pos = line + 1;

            /* Done.  Called when the last character is
             * eaten to retrieve the range’s offsets. */
            return function () {
                var last = line + 1;

                while (pos < last) {
                    indentation.push((offset[pos] || 0) + 1);

                    pos++;
                }

                return indentation;
            };
        }

        /* Get the current position. */
        function now() {
            var pos = {line: line, column: column};

            pos.offset = self.toOffset(pos);

            return pos;
        }

        /* Store position information for a node. */
        function Position(start) {
            this.start = start;
            this.end = now();
        }

        /* Throw when a value is incorrectly eaten.
         * This shouldn’t happen but will throw on new,
         * incorrect rules. */
        function validateEat(subvalue) {
            /* istanbul ignore if */
            if (value.substring(0, subvalue.length) !== subvalue) {
                /* Capture stack-trace. */
                self.file.fail(
                    new Error(
                        'Incorrectly eaten value: please report this ' +
                        'warning on http://git.io/vg5Ft'
                    ),
                    now()
                );
            }
        }

        /* Mark position and patch `node.position`. */
        function position() {
            var before = now();

            return update;

            /* Add the position to a node. */
            function update(node, indent) {
                var prev = node.position;
                var start = prev ? prev.start : before;
                var combined = [];
                var n = prev && prev.end.line;
                var l = before.line;

                node.position = new Position(start);

                /* If there was already a `position`, this
                 * node was merged.  Fixing `start` wasn’t
                 * hard, but the indent is different.
                 * Especially because some information, the
                 * indent between `n` and `l` wasn’t
                 * tracked.  Luckily, that space is
                 * (should be?) empty, so we can safely
                 * check for it now. */
                if (prev && indent && prev.indent) {
                    combined = prev.indent;

                    if (n < l) {
                        while (++n < l) {
                            combined.push((offset[n] || 0) + 1);
                        }

                        combined.push(before.column);
                    }

                    indent = combined.concat(indent);
                }

                node.position.indent = indent || [];

                return node;
            }
        }

        /* Add `node` to `parent`s children or to `tokens`.
         * Performs merges where possible. */
        function add(node, parent) {
            var children = parent ? parent.children : tokens;
            var prev = children[children.length - 1];

            if (
                prev &&
                node.type === prev.type &&
                node.type in MERGEABLE_NODES &&
                mergeable(prev) &&
                mergeable(node)
            ) {
                node = MERGEABLE_NODES[node.type].call(self, prev, node);
            }

            if (node !== prev) {
                children.push(node);
            }

            if (self.atStart && tokens.length !== 0) {
                self.exitStart();
            }

            return node;
        }

        /* Remove `subvalue` from `value`.
         * `subvalue` must be at the start of `value`. */
        function eat(subvalue) {
            var indent = getOffset();
            var pos = position();
            var current = now();

            validateEat(subvalue);

            apply.reset = reset;
            reset.test = test;
            apply.test = test;

            value = value.substring(subvalue.length);

            updatePosition(subvalue);

            indent = indent();

            return apply;

            /* Add the given arguments, add `position` to
             * the returned node, and return the node. */
            function apply(node, parent) {
                return pos(add(pos(node), parent), indent);
            }

            /* Functions just like apply, but resets the
             * content:  the line and column are reversed,
             * and the eaten value is re-added.
             * This is useful for nodes with a single
             * type of content, such as lists and tables.
             * See `apply` above for what parameters are
             * expected. */
            function reset() {
                var node = apply.apply(null, arguments);

                line = current.line;
                column = current.column;
                value = subvalue + value;

                return node;
            }

            /* Test the position, after eating, and reverse
             * to a not-eaten state. */
            function test() {
                var result = pos({});

                line = current.line;
                column = current.column;
                value = subvalue + value;

                return result.position;
            }
        }
    }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(3);
var escapes = __webpack_require__(20);
var defaults = __webpack_require__(21);

module.exports = setOptions;

function setOptions(options) {
    var self = this;
    var current = self.options;
    var key;
    var value;

    if (options == null) {
        options = {};
    } else if (typeof options === 'object') {
        options = xtend(options);
    } else {
        throw new Error(
            'Invalid value `' + options + '` ' +
            'for setting `options`'
        );
    }

    for (key in defaults) {
        value = options[key];

        if (value == null) {
            value = current[key];
        }

        if (
            (key !== 'blocks' && typeof value !== 'boolean') ||
            (key === 'blocks' && typeof value !== 'object')
        ) {
            throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
        }

        options[key] = value;
    }

    self.options = options;
    self.escape = escapes(options);

    return self;
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

/* Get markdown escapes. */
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    position: true,
    gfm: true,
    commonmark: false,
    footnotes: false,
    pedantic: false,
    blocks: __webpack_require__(22)
};


/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = ["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(3);
var removePosition = __webpack_require__(24);

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
    // console.log('parse')

    var self = this;
    var value = String(self.file);
    var start = {line: 1, column: 1, offset: 0};
    var content = xtend(start);
    var node;

    /* Clean non-unix newlines: `\r\n` and `\r` are all
     * changed to `\n`.  This should not affect positional
     * information. */
    value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

    if (value.charCodeAt(0) === 0xFEFF) {
        value = value.slice(1);

        content.column++;
        content.offset++;
    }

    node = {
        type: 'root',
        children: self.tokenizeBlock(value, content),
        position: {
            start: start,
            end: self.eof || xtend(start)
        }
    };

    if (!self.options.position) {
        removePosition(node, true);
    }

    return node;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(25)

module.exports = removePosition

/* Remove `position`s from `tree`. */
function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(26)

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var is = __webpack_require__(27)

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result

    if (!test || is(test, node, index, parents[parents.length - 1] || null)) {
      result = visitor(node, parents)

      if (result === EXIT) {
        return result
      }
    }

    if (node.children && result !== SKIP) {
      return all(node.children, parents.concat(node)) === EXIT ? EXIT : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var child
    var result

    while (index > min && index < children.length) {
      child = children[index]
      result = child && one(child, index, parents)

      if (result === EXIT) {
        return result
      }

      index = typeof result === 'number' ? result : index + step
    }
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

/* Expose. */
module.exports = is

/* Assert if `test` passes for `node`.
 * When a `parent` node is known the `index` of node */
function is(test, node, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined
  var hasIndex = index !== null && index !== undefined
  var check = convert(test)

  if (
    hasIndex &&
    (typeof index !== 'number' || index < 0 || index === Infinity)
  ) {
    throw new Error('Expected positive finite index or child node')
  }

  if (hasParent && (!is(null, parent) || !parent.children)) {
    throw new Error('Expected parent node')
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index')
  }

  return Boolean(check.call(context, node, index, parent))
}

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

/* Utility assert each property in `test` is represented
 * in `node`, and each values are strictly equal. */
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

/* Utility to convert a string into a function which checks
 * a given node’s type for said string. */
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

/* Utility to return true. */
function ok() {
  return true
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
    var character = value.charAt(0);
    var length;
    var subvalue;
    var queue;
    var index;

    if (character !== '\n') {
        return;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    index = 1;
    length = value.length;
    subvalue = character;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
            break;
        }

        queue += character;

        if (character === '\n') {
            subvalue += queue;
            queue = '';
        }

        index++;
    }

    eat(subvalue);
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

/* Check if the given character code, or the character
 * code at the first character, is a whitespace character. */
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(31);
var trim = __webpack_require__(32);

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
    var index = -1;
    var length = value.length;
    var subvalue = '';
    var content = '';
    var subvalueQueue = '';
    var contentQueue = '';
    var character;
    var blankQueue;
    var indent;

    while (++index < length) {
        character = value.charAt(index);

        if (indent) {
            indent = false;

            subvalue += subvalueQueue;
            content += contentQueue;
            subvalueQueue = '';
            contentQueue = '';

            if (character === C_NEWLINE) {
                subvalueQueue = character;
                contentQueue = character;
            } else {
                subvalue += character;
                content += character;

                while (++index < length) {
                    character = value.charAt(index);

                    if (!character || character === C_NEWLINE) {
                        contentQueue = character;
                        subvalueQueue = character;
                        break;
                    }

                    subvalue += character;
                    content += character;
                }
            }
        } else if (
            character === C_SPACE &&
            value.charAt(index + 1) === character &&
            value.charAt(index + 2) === character &&
            value.charAt(index + 3) === character
        ) {
            subvalueQueue += CODE_INDENT;
            index += 3;
            indent = true;
        } else if (character === C_TAB) {
            subvalueQueue += character;
            indent = true;
        } else {
            blankQueue = '';

            while (character === C_TAB || character === C_SPACE) {
                blankQueue += character;
                character = value.charAt(++index);
            }

            if (character !== C_NEWLINE) {
                break;
            }

            subvalueQueue += blankQueue + character;
            contentQueue += character;
        }
    }

    if (content) {
        if (silent) {
            return true;
        }

        return eat(subvalue)({
            type: 'code',
            lang: null,
            value: trim(content)
        });
    }
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

var line = '\n'

/* Remove final newline characters from `value`. */
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    /* Empty */
  }

  return val.slice(0, index + 1)
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(32);

module.exports = fencedCode;

var getLines = __webpack_require__(34);

var hash = __webpack_require__(35);

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
    var self = this;
    var settings = self.options;
    var length = value.length + 1;
    var index = 0;
    var subvalue = '';
    var fenceCount;
    var marker;
    var character;
    var flag;
    var queue;
    var content;
    var exdentedContent;
    var closing;
    var exdentedClosing;
    var indent;
    var now;

    if (!settings.gfm) {
        return;
    }

    /* Eat initial spacing. */
    while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            break;
        }

        subvalue += character;
        index++;
    }

    indent = index;

    /* Eat the fence. */
    character = value.charAt(index);

    if (character !== C_TILDE && character !== C_TICK) {
        return;
    }

    index++;
    marker = character;
    fenceCount = 1;
    subvalue += character;

    while (index < length) {
        character = value.charAt(index);

        if (character !== marker) {
            break;
        }

        subvalue += character;
        fenceCount++;
        index++;
    }

    if (fenceCount < MIN_FENCE_COUNT) {
        return;
    }

    /* Eat spacing before flag. */
    while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            break;
        }

        subvalue += character;
        index++;
    }

    /* Eat flag. */
    flag = '';
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (
            character === C_NEWLINE ||
            character === C_TILDE ||
            character === C_TICK
        ) {
            break;
        }

        if (character === C_SPACE || character === C_TAB) {
            queue += character;
        } else {
            flag += queue + character;
            queue = '';
        }

        index++;
    }

    character = value.charAt(index);

    if (character && character !== C_NEWLINE) {
        return;
    }

    if (silent) {
        return true;
    }

    now = eat.now();
    now.column += subvalue.length;
    now.offset += subvalue.length;

    subvalue += flag;
    flag = self.decode.raw(self.unescape(flag), now);

    if (queue) {
        subvalue += queue;
    }

    queue = '';
    closing = '';
    exdentedClosing = '';
    content = '';
    exdentedContent = '';

    /* Eat content. */
    while (index < length) {
        character = value.charAt(index);
        content += closing;
        exdentedContent += exdentedClosing;
        closing = '';
        exdentedClosing = '';

        if (character !== C_NEWLINE) {
            content += character;
            exdentedClosing += character;
            index++;
            continue;
        }

        /* Add the newline to `subvalue` if its the first
         * character.  Otherwise, add it to the `closing`
         * queue. */
        if (content) {
            closing += character;
            exdentedClosing += character;
        } else {
            subvalue += character;
        }

        queue = '';
        index++;

        while (index < length) {
            character = value.charAt(index);

            if (character !== C_SPACE) {
                break;
            }

            queue += character;
            index++;
        }

        closing += queue;
        exdentedClosing += queue.slice(indent);

        if (queue.length >= CODE_INDENT_COUNT) {
            continue;
        }

        queue = '';

        while (index < length) {
            character = value.charAt(index);

            if (character !== marker) {
                break;
            }

            queue += character;
            index++;
        }

        closing += queue;
        exdentedClosing += queue;

        if (queue.length < fenceCount) {
            continue;
        }

        queue = '';

        while (index < length) {
            character = value.charAt(index);

            if (character !== C_SPACE && character !== C_TAB) {
                break;
            }

            closing += character;
            exdentedClosing += character;
            index++;
        }

        if (!character || character === C_NEWLINE) {
            break;
        }
    }

    subvalue += content + closing;

    var origin = getLines(subvalue);

    return eat(subvalue)({
        type: 'code',
        lang: flag || null,
        value: trim(exdentedContent),
        origin: origin,
        hash: hash(origin)
    });
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function getLines (text) {
    var BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
    return text.split(BREAK_LINE_REGEXP);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function hash(str) {
    if (!str) return 0;

    str = String(str);
    var hash = 5381, i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hash = __webpack_require__(35);

var trim = __webpack_require__(37);
var interrupt = __webpack_require__(38);

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
    var self = this;
    var offsets = self.offset;
    var tokenizers = self.blockTokenizers;
    var interruptors = self.interruptBlockquote;
    var now = eat.now();
    var currentLine = now.line;
    var length = value.length;
    var values = [];
    var contents = [];
    var indents = [];
    var add;
    var index = 0;
    var character;
    var rest;
    var nextIndex;
    var content;
    var line;
    var startIndex;
    var prefixed;
    var exit;

    while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            break;
        }

        index++;
    }

    if (value.charAt(index) !== C_GT) {
        return;
    }

    if (silent) {
        return true;
    }

    index = 0;

    while (index < length) {
        nextIndex = value.indexOf(C_NEWLINE, index);
        startIndex = index;
        prefixed = false;

        if (nextIndex === -1) {
            nextIndex = length;
        }

        while (index < length) {
            character = value.charAt(index);

            if (character !== C_SPACE && character !== C_TAB) {
                break;
            }

            index++;
        }

        if (value.charAt(index) === C_GT) {
            index++;
            prefixed = true;

            if (value.charAt(index) === C_SPACE) {
                index++;
            }
        } else {
            index = startIndex;
        }

        content = value.slice(index, nextIndex);

        if (!prefixed && !trim(content)) {
            index = startIndex;
            break;
        }

        if (!prefixed) {
            rest = value.slice(index);

            /* Check if the following code contains a possible
             * block. */
            if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
                break;
            }
        }

        line = startIndex === index ? content : value.slice(startIndex, nextIndex);

        indents.push(index - startIndex);
        values.push(line);
        contents.push(content);

        index = nextIndex + 1;
    }

    index = -1;
    length = indents.length;
    add = eat(values.join(C_NEWLINE));

    while (++index < length) {
        offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
        currentLine++;
    }

    exit = self.enterBlock();
    contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
    exit();

    return add({
        type: 'blockquote',
        children: contents,
        origin: line,
        hash: hash(line)
    });
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
    var bools = ['pedantic', 'commonmark'];
    var count = bools.length;
    var length = interruptors.length;
    var index = -1;
    var interruptor;
    var config;
    var fn;
    var offset;
    var bool;
    var ignore;

    while (++index < length) {
        interruptor = interruptors[index];
        config = interruptor[1] || {};
        fn = interruptor[0];
        offset = -1;
        ignore = false;

        while (++offset < count) {
            bool = bools[offset];

            if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
                ignore = true;
                break;
            }
        }

        if (ignore) {
            continue;
        }

        if (tokenizers[fn].apply(ctx, params)) {
            return true;
        }
    }

    return false;
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hash = __webpack_require__(35);

module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
    var self = this;
    var settings = self.options;
    var length = value.length + 1;
    var index = -1;
    var now = eat.now();
    var subvalue = '';
    var content = '';
    var character;
    var queue;
    var depth;

    /* Eat initial spacing. */
    while (++index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            index--;
            break;
        }

        subvalue += character;
    }

    /* Eat hashes. */
    depth = 0;

    while (++index <= length) {
        character = value.charAt(index);

        if (character !== C_HASH) {
            index--;
            break;
        }

        subvalue += character;
        depth++;
    }

    if (depth > MAX_ATX_COUNT) {
        return;
    }

    if (
        !depth ||
        (!settings.pedantic && value.charAt(index + 1) === C_HASH)
    ) {
        return;
    }

    length = value.length + 1;

    /* Eat intermediate white-space. */
    queue = '';

    while (++index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            index--;
            break;
        }

        queue += character;
    }

    /* Exit when not in pedantic mode without spacing. */
    if (
        !settings.pedantic &&
        queue.length === 0 &&
        character &&
        character !== C_NEWLINE
    ) {
        return;
    }

    if (silent) {
        return true;
    }

    /* Eat content. */
    subvalue += queue;
    queue = '';
    content = '';

    while (++index < length) {
        character = value.charAt(index);

        if (!character || character === C_NEWLINE) {
            break;
        }

        if (
            character !== C_SPACE &&
            character !== C_TAB &&
            character !== C_HASH
        ) {
            content += queue + character;
            queue = '';
            continue;
        }

        while (character === C_SPACE || character === C_TAB) {
            queue += character;
            character = value.charAt(++index);
        }

        while (character === C_HASH) {
            queue += character;
            character = value.charAt(++index);
        }

        while (character === C_SPACE || character === C_TAB) {
            queue += character;
            character = value.charAt(++index);
        }

        index--;
    }

    now.column += subvalue.length;
    now.offset += subvalue.length;
    subvalue += content + queue;

    return eat(subvalue)({
        type: 'heading',
        depth: depth,
        children: self.tokenizeInline(content, now),
        origin: subvalue,
        hash: hash(subvalue)
    });
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;

var hash = __webpack_require__(35);

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
    var index = -1;
    var length = value.length + 1;
    var subvalue = '';
    var character;
    var marker;
    var markerCount;
    var queue;

    while (++index < length) {
        character = value.charAt(index);

        if (character !== C_TAB && character !== C_SPACE) {
            break;
        }

        subvalue += character;
    }

    if (
        character !== C_ASTERISK &&
        character !== C_DASH &&
        character !== C_UNDERSCORE
    ) {
        return;
    }

    marker = character;
    subvalue += character;
    markerCount = 1;
    queue = '';

    while (++index < length) {
        character = value.charAt(index);

        if (character === marker) {
            markerCount++;
            subvalue += queue + marker;
            queue = '';
        } else if (character === C_SPACE) {
            queue += character;
        } else if (
            markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
            (!character || character === C_NEWLINE)
        ) {
            subvalue += queue;

            if (silent) {
                return true;
            }

            return eat(subvalue)({
                type: 'thematicBreak',
                origin: subvalue,
                hash: hash(subvalue)
            });
        } else {
            return;
        }
    }
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

var trim = __webpack_require__(37);
var repeat = __webpack_require__(31);
var decimal = __webpack_require__(13);
var getIndent = __webpack_require__(42);
var removeIndent = __webpack_require__(43);
var interrupt = __webpack_require__(38);
var hash = __webpack_require__(35);

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
    var self = this;
    var commonmark = self.options.commonmark;
    var pedantic = self.options.pedantic;
    var tokenizers = self.blockTokenizers;
    var interuptors = self.interruptList;
    var markers;
    var index = 0;
    var length = value.length;
    var start = null;
    var size = 0;
    var queue;
    var ordered;
    var character;
    var marker;
    var nextIndex;
    var startIndex;
    var prefixed;
    var currentMarker;
    var content;
    var line;
    var prevEmpty;
    var empty;
    var items;
    var allLines;
    var emptyLines;
    var item;
    var enterTop;
    var exitBlockquote;
    var isLoose;
    var node;
    var now;
    var end;
    var indented;

    while (index < length) {
        character = value.charAt(index);

        if (character === C_TAB) {
            size += TAB_SIZE - (size % TAB_SIZE);
        } else if (character === C_SPACE) {
            size++;
        } else {
            break;
        }

        index++;
    }

    if (size >= TAB_SIZE) {
        return;
    }

    character = value.charAt(index);

    markers = commonmark ?
        LIST_ORDERED_COMMONMARK_MARKERS :
        LIST_ORDERED_MARKERS;

    if (LIST_UNORDERED_MARKERS[character] === true) {
        marker = character;
        ordered = false;
    } else {
        ordered = true;
        queue = '';

        while (index < length) {
            character = value.charAt(index);

            if (!decimal(character)) {
                break;
            }

            queue += character;
            index++;
        }

        character = value.charAt(index);

        if (!queue || markers[character] !== true) {
            return;
        }

        start = parseInt(queue, 10);
        marker = character;
    }

    character = value.charAt(++index);

    if (character !== C_SPACE && character !== C_TAB) {
        return;
    }

    if (silent) {
        return true;
    }

    index = 0;
    items = [];
    allLines = [];
    emptyLines = [];

    while (index < length) {
        nextIndex = value.indexOf(C_NEWLINE, index);
        startIndex = index;
        prefixed = false;
        indented = false;

        if (nextIndex === -1) {
            nextIndex = length;
        }

        end = index + TAB_SIZE;
        size = 0;

        while (index < length) {
            character = value.charAt(index);

            if (character === C_TAB) {
                size += TAB_SIZE - (size % TAB_SIZE);
            } else if (character === C_SPACE) {
                size++;
            } else {
                break;
            }

            index++;
        }

        if (size >= TAB_SIZE) {
            indented = true;
        }

        if (item && size >= item.indent) {
            indented = true;
        }

        character = value.charAt(index);
        currentMarker = null;

        if (!indented) {
            if (LIST_UNORDERED_MARKERS[character] === true) {
                currentMarker = character;
                index++;
                size++;
            } else {
                queue = '';

                while (index < length) {
                    character = value.charAt(index);

                    if (!decimal(character)) {
                        break;
                    }

                    queue += character;
                    index++;
                }

                character = value.charAt(index);
                index++;

                if (queue && markers[character] === true) {
                    currentMarker = character;
                    size += queue.length + 1;
                }
            }

            if (currentMarker) {
                character = value.charAt(index);

                if (character === C_TAB) {
                    size += TAB_SIZE - (size % TAB_SIZE);
                    index++;
                } else if (character === C_SPACE) {
                    end = index + TAB_SIZE;

                    while (index < end) {
                        if (value.charAt(index) !== C_SPACE) {
                            break;
                        }

                        index++;
                        size++;
                    }

                    if (index === end && value.charAt(index) === C_SPACE) {
                        index -= TAB_SIZE - 1;
                        size -= TAB_SIZE - 1;
                    }
                } else if (character !== C_NEWLINE && character !== '') {
                    currentMarker = null;
                }
            }
        }

        if (currentMarker) {
            if (!pedantic && marker !== currentMarker) {
                break;
            }

            prefixed = true;
        } else {
            if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
                indented = true;
            } else if (commonmark && item) {
                indented = size >= item.indent || size > TAB_SIZE;
            }

            prefixed = false;
            index = startIndex;
        }

        line = value.slice(startIndex, nextIndex);
        content = startIndex === index ? line : value.slice(index, nextIndex);

        if (
            currentMarker === C_ASTERISK ||
            currentMarker === C_UNDERSCORE ||
            currentMarker === C_DASH
        ) {
            if (tokenizers.thematicBreak.call(self, eat, line, true)) {
                break;
            }
        }

        prevEmpty = empty;
        empty = !trim(content).length;

        if (indented && item) {
            item.value = item.value.concat(emptyLines, line);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        } else if (prefixed) {
            if (emptyLines.length !== 0) {
                item.value.push('');
                item.trail = emptyLines.concat();
            }

            item = {
                value: [line],
                indent: size,
                trail: []
            };

            items.push(item);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        } else if (empty) {
            if (prevEmpty) {
                break;
            }

            emptyLines.push(line);
        } else {
            if (prevEmpty) {
                break;
            }

            if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
                break;
            }

            item.value = item.value.concat(emptyLines, line);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        }

        index = nextIndex + 1;
    }

    node = eat(allLines.join(C_NEWLINE)).reset({
        type: 'list',
        ordered: ordered,
        start: start,
        loose: null,
        children: [],
        origin: allLines,
        hash: hash(allLines)
    });

    enterTop = self.enterList();
    exitBlockquote = self.enterBlock();
    isLoose = false;
    index = -1;
    length = items.length;

    while (++index < length) {
        item = items[index].value.join(C_NEWLINE);
        now = eat.now();

        item = eat(item)(listItem(self, item, now), node);

        if (item.loose) {
            isLoose = true;
        }

        item = items[index].trail.join(C_NEWLINE);

        if (index !== length - 1) {
            item += C_NEWLINE;
        }

        eat(item);
    }

    enterTop();
    exitBlockquote();

    node.loose = isLoose;

    return node;
}

function listItem(ctx, value, position) {
    var offsets = ctx.offset;
    var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
    var checked = null;
    var task;
    var indent;

    value = fn.apply(null, arguments);

    if (ctx.options.gfm) {
        task = value.match(EXPRESSION_TASK_ITEM);

        if (task) {
            indent = task[0].length;
            checked = task[1].toLowerCase() === C_X_LOWER;
            offsets[position.line] += indent;
            value = value.slice(indent);
        }
    }

    return {
        type: 'listItem',
        loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
        value.charAt(value.length - 1) === C_NEWLINE,
        checked: checked,
        children: ctx.tokenizeBlock(value, position)
    };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
    var offsets = ctx.offset;
    var line = position.line;

    /* Remove the list-item’s bullet. */
    value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

    /* The initial line was also matched by the below, so
     * we reset the `line`. */
    line = position.line;

    return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

    /* A simple replacer which removed all matches,
     * and adds their length to `offset`. */
    function replacer($0) {
        offsets[line] = (offsets[line] || 0) + $0.length;
        line++;

        return '';
    }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
    var offsets = ctx.offset;
    var line = position.line;
    var max;
    var bullet;
    var rest;
    var lines;
    var trimmedLines;
    var index;
    var length;

    /* Remove the list-item’s bullet. */
    value = value.replace(EXPRESSION_BULLET, replacer);

    lines = value.split(C_NEWLINE);

    trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

    /* We replaced the initial bullet with something
     * else above, which was used to trick
     * `removeIndentation` into removing some more
     * characters when possible.  However, that could
     * result in the initial line to be stripped more
     * than it should be. */
    trimmedLines[0] = rest;

    offsets[line] = (offsets[line] || 0) + bullet.length;
    line++;

    index = 0;
    length = lines.length;

    while (++index < length) {
        offsets[line] = (offsets[line] || 0) +
            lines[index].length - trimmedLines[index].length;
        line++;
    }

    return trimmedLines.join(C_NEWLINE);

    function replacer($0, $1, $2, $3, $4) {
        bullet = $1 + $2 + $3;
        rest = $4;

        /* Make sure that the first nine numbered list items
         * can indent with an extra space.  That is, when
         * the bullet did not receive an extra final space. */
        if (Number($2) < 10 && bullet.length % 2 === 1) {
            $2 = C_SPACE + $2;
        }

        max = $1 + repeat(C_SPACE, $2.length) + $3;

        return max + rest;
    }
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/* Gets indentation information for a line. */
function indentation(value) {
    var index = 0;
    var indent = 0;
    var character = value.charAt(index);
    var stops = {};
    var size;

    while (character in characters) {
        size = characters[character];

        indent += size;

        if (size > 1) {
            indent = Math.floor(indent / size) * size;
        }

        stops[indent] = index;

        character = value.charAt(++index);
    }

    return {indent: indent, stops: stops};
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(37);
var repeat = __webpack_require__(31);
var getIndent = __webpack_require__(42);

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
    var values = value.split(C_NEWLINE);
    var position = values.length + 1;
    var minIndent = Infinity;
    var matrix = [];
    var index;
    var indentation;
    var stops;
    var padding;

    values.unshift(repeat(C_SPACE, maximum) + '!');

    while (position--) {
        indentation = getIndent(values[position]);

        matrix[position] = indentation.stops;

        if (trim(values[position]).length === 0) {
            continue;
        }

        if (indentation.indent) {
            if (indentation.indent > 0 && indentation.indent < minIndent) {
                minIndent = indentation.indent;
            }
        } else {
            minIndent = Infinity;

            break;
        }
    }

    if (minIndent !== Infinity) {
        position = values.length;

        while (position--) {
            stops = matrix[position];
            index = minIndent;

            while (index && !(index in stops)) {
                index--;
            }

            if (
                trim(values[position]).length !== 0 &&
                minIndent &&
                index !== minIndent
            ) {
                padding = C_TAB;
            } else {
                padding = '';
            }

            values[position] = padding + values[position].slice(
                index in stops ? stops[index] + 1 : 0
            );
        }
    }

    values.shift();

    return values.join(C_NEWLINE);
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
    var self = this;
    var now = eat.now();
    var length = value.length;
    var index = -1;
    var subvalue = '';
    var content;
    var queue;
    var character;
    var marker;
    var depth;

    /* Eat initial indentation. */
    while (++index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
            index--;
            break;
        }

        subvalue += character;
    }

    /* Eat content. */
    content = '';
    queue = '';

    while (++index < length) {
        character = value.charAt(index);

        if (character === C_NEWLINE) {
            index--;
            break;
        }

        if (character === C_SPACE || character === C_TAB) {
            queue += character;
        } else {
            content += queue + character;
            queue = '';
        }
    }

    now.column += subvalue.length;
    now.offset += subvalue.length;
    subvalue += content + queue;

    /* Ensure the content is followed by a newline and a
     * valid marker. */
    character = value.charAt(++index);
    marker = value.charAt(++index);

    if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
        return;
    }

    subvalue += character;

    /* Eat Setext-line. */
    queue = marker;
    depth = SETEXT_MARKERS[marker];

    while (++index < length) {
        character = value.charAt(index);

        if (character !== marker) {
            if (character !== C_NEWLINE) {
                return;
            }

            index--;
            break;
        }

        queue += character;
    }

    if (silent) {
        return true;
    }

    return eat(subvalue + queue)({
        type: 'heading',
        depth: depth,
        children: self.tokenizeInline(content, now)
    });
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(46).openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
    var self = this;
    var blocks = self.options.blocks;
    var length = value.length;
    var index = 0;
    var next;
    var line;
    var offset;
    var character;
    var count;
    var sequence;
    var subvalue;

    var sequences = [
        [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
        [/^<!--/, /-->/, true],
        [/^<\?/, /\?>/, true],
        [/^<![A-Za-z]/, />/, true],
        [/^<!\[CDATA\[/, /\]\]>/, true],
        [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
        [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
    ];

    /* Eat initial spacing. */
    while (index < length) {
        character = value.charAt(index);

        if (character !== C_TAB && character !== C_SPACE) {
            break;
        }

        index++;
    }

    if (value.charAt(index) !== C_LT) {
        return;
    }

    next = value.indexOf(C_NEWLINE, index + 1);
    next = next === -1 ? length : next;
    line = value.slice(index, next);
    offset = -1;
    count = sequences.length;

    while (++offset < count) {
        if (sequences[offset][0].test(line)) {
            sequence = sequences[offset];
            break;
        }
    }

    if (!sequence) {
        return;
    }

    if (silent) {
        return sequence[2];
    }

    index = next;

    if (!sequence[1].test(line)) {
        while (index < length) {
            next = value.indexOf(C_NEWLINE, index + 1);
            next = next === -1 ? length : next;
            line = value.slice(index + 1, next);

            if (sequence[1].test(line)) {
                if (line) {
                    index = next;
                }

                break;
            }

            index = next;
        }
    }

    subvalue = value.slice(0, index);

    return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
    openTag + '|' +
    closeTag + '|' +
    comment + '|' +
    processing + '|' +
    declaration + '|' +
    cdata +
    ')');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var normalize = __webpack_require__(48);

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
    var self = this;
    var offsets = self.offset;
    var index;
    var length;
    var subvalue;
    var now;
    var currentLine;
    var content;
    var queue;
    var subqueue;
    var character;
    var identifier;
    var add;
    var exit;

    if (!self.options.footnotes) {
        return;
    }

    index = 0;
    length = value.length;
    subvalue = '';
    now = eat.now();
    currentLine = now.line;

    while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
            break;
        }

        subvalue += character;
        index++;
    }

    if (
        value.charAt(index) !== C_BRACKET_OPEN ||
        value.charAt(index + 1) !== C_CARET
    ) {
        return;
    }

    subvalue += C_BRACKET_OPEN + C_CARET;
    index = subvalue.length;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (character === C_BRACKET_CLOSE) {
            break;
        } else if (character === C_BACKSLASH) {
            queue += character;
            index++;
            character = value.charAt(index);
        }

        queue += character;
        index++;
    }

    if (
        !queue ||
        value.charAt(index) !== C_BRACKET_CLOSE ||
        value.charAt(index + 1) !== C_COLON
    ) {
        return;
    }

    if (silent) {
        return true;
    }

    identifier = normalize(queue);
    subvalue += queue + C_BRACKET_CLOSE + C_COLON;
    index = subvalue.length;

    while (index < length) {
        character = value.charAt(index);

        if (character !== C_TAB && character !== C_SPACE) {
            break;
        }

        subvalue += character;
        index++;
    }

    now.column += subvalue.length;
    now.offset += subvalue.length;
    queue = '';
    content = '';
    subqueue = '';

    while (index < length) {
        character = value.charAt(index);

        if (character === C_NEWLINE) {
            subqueue = character;
            index++;

            while (index < length) {
                character = value.charAt(index);

                if (character !== C_NEWLINE) {
                    break;
                }

                subqueue += character;
                index++;
            }

            queue += subqueue;
            subqueue = '';

            while (index < length) {
                character = value.charAt(index);

                if (character !== C_SPACE) {
                    break;
                }

                subqueue += character;
                index++;
            }

            if (subqueue.length === 0) {
                break;
            }

            queue += subqueue;
        }

        if (queue) {
            content += queue;
            queue = '';
        }

        content += character;
        index++;
    }

    subvalue += content;

    content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
        offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
        currentLine++;

        return '';
    });

    add = eat(subvalue);

    exit = self.enterBlock();
    content = self.tokenizeBlock(content, now);
    exit();

    return add({
        type: 'footnoteDefinition',
        identifier: identifier,
        children: content
    });
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(49);

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
    return collapseWhiteSpace(value).toLowerCase();
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var normalize = __webpack_require__(48);

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
    var self = this;
    var commonmark = self.options.commonmark;
    var index = 0;
    var length = value.length;
    var subvalue = '';
    var beforeURL;
    var beforeTitle;
    var queue;
    var character;
    var test;
    var identifier;
    var url;
    var title;

    while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE && character !== C_TAB) {
            break;
        }

        subvalue += character;
        index++;
    }

    character = value.charAt(index);

    if (character !== C_BRACKET_OPEN) {
        return;
    }

    index++;
    subvalue += character;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (character === C_BRACKET_CLOSE) {
            break;
        } else if (character === C_BACKSLASH) {
            queue += character;
            index++;
            character = value.charAt(index);
        }

        queue += character;
        index++;
    }

    if (
        !queue ||
        value.charAt(index) !== C_BRACKET_CLOSE ||
        value.charAt(index + 1) !== C_COLON
    ) {
        return;
    }

    identifier = queue;
    subvalue += queue + C_BRACKET_CLOSE + C_COLON;
    index = subvalue.length;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (
            character !== C_TAB &&
            character !== C_SPACE &&
            character !== C_NEWLINE
        ) {
            break;
        }

        subvalue += character;
        index++;
    }

    character = value.charAt(index);
    queue = '';
    beforeURL = subvalue;

    if (character === C_LT) {
        index++;

        while (index < length) {
            character = value.charAt(index);

            if (!isEnclosedURLCharacter(character)) {
                break;
            }

            queue += character;
            index++;
        }

        character = value.charAt(index);

        if (character === isEnclosedURLCharacter.delimiter) {
            subvalue += C_LT + queue + character;
            index++;
        } else {
            if (commonmark) {
                return;
            }

            index -= queue.length + 1;
            queue = '';
        }
    }

    if (!queue) {
        while (index < length) {
            character = value.charAt(index);

            if (!isUnclosedURLCharacter(character)) {
                break;
            }

            queue += character;
            index++;
        }

        subvalue += queue;
    }

    if (!queue) {
        return;
    }

    url = queue;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (
            character !== C_TAB &&
            character !== C_SPACE &&
            character !== C_NEWLINE
        ) {
            break;
        }

        queue += character;
        index++;
    }

    character = value.charAt(index);
    test = null;

    if (character === C_DOUBLE_QUOTE) {
        test = C_DOUBLE_QUOTE;
    } else if (character === C_SINGLE_QUOTE) {
        test = C_SINGLE_QUOTE;
    } else if (character === C_PAREN_OPEN) {
        test = C_PAREN_CLOSE;
    }

    if (!test) {
        queue = '';
        index = subvalue.length;
    } else if (queue) {
        subvalue += queue + character;
        index = subvalue.length;
        queue = '';

        while (index < length) {
            character = value.charAt(index);

            if (character === test) {
                break;
            }

            if (character === C_NEWLINE) {
                index++;
                character = value.charAt(index);

                if (character === C_NEWLINE || character === test) {
                    return;
                }

                queue += C_NEWLINE;
            }

            queue += character;
            index++;
        }

        character = value.charAt(index);

        if (character !== test) {
            return;
        }

        beforeTitle = subvalue;
        subvalue += queue + character;
        index++;
        title = queue;
        queue = '';
    } else {
        return;
    }

    while (index < length) {
        character = value.charAt(index);

        if (character !== C_TAB && character !== C_SPACE) {
            break;
        }

        subvalue += character;
        index++;
    }

    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
        if (silent) {
            return true;
        }

        beforeURL = eat(beforeURL).test().end;
        url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false});

        if (title) {
            beforeTitle = eat(beforeTitle).test().end;
            title = self.decode.raw(self.unescape(title), beforeTitle);
        }

        return eat(subvalue)({
            type: 'definition',
            identifier: normalize(identifier),
            title: title || null,
            url: url
        });
    }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
    return character !== C_GT &&
        character !== C_BRACKET_OPEN &&
        character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
    return character !== C_BRACKET_OPEN &&
        character !== C_BRACKET_CLOSE &&
        !whitespace(character);
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var hash = __webpack_require__(35);

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {

    var self = this;
    var index;
    var alignments;
    var alignment;
    var subvalue;
    var row;
    var length;
    var lines;
    var queue;
    var character;
    var hasDash;
    var align;
    var cell;
    var preamble;
    var count;
    var opening;
    var now;
    var position;
    var lineCount;
    var line;
    var rows;
    var table;
    var lineIndex;
    var pipeIndex;
    var first;

    /* Exit when not in gfm-mode. */
    if (!self.options.gfm) {
        return;
    }

    /* Get the rows.
     * Detecting tables soon is hard, so there are some
     * checks for performance here, such as the minimum
     * number of rows, and allowed characters in the
     * alignment row. */
    index = 0;
    lineCount = 0;
    length = value.length + 1;
    lines = [];
    var origin = [];

    while (index < length) {
        lineIndex = value.indexOf(C_NEWLINE, index);
        pipeIndex = value.indexOf(C_PIPE, index + 1);

        if (lineIndex === -1) {
            lineIndex = value.length;
        }

        if (pipeIndex === -1 || pipeIndex > lineIndex) {
            if (lineCount < MIN_TABLE_ROWS) {
                return;
            }

            break;
        }

        origin.push(value.slice(index, lineIndex));
        lines.push(value.slice(index, lineIndex));
        lineCount++;
        index = lineIndex + 1;
    }


    /* Parse the alignment row. */
    subvalue = lines.join(C_NEWLINE);
    alignments = lines.splice(1, 1)[0] || [];
    index = 0;
    length = alignments.length;
    lineCount--;
    alignment = false;
    align = [];

    while (index < length) {
        character = alignments.charAt(index);

        if (character === C_PIPE) {
            hasDash = null;

            if (alignment === false) {
                if (first === false) {
                    return;
                }
            } else {
                align.push(alignment);
                alignment = false;
            }

            first = false;
        } else if (character === C_DASH) {
            hasDash = true;
            alignment = alignment || TABLE_ALIGN_NONE;
        } else if (character === C_COLON) {
            if (alignment === TABLE_ALIGN_LEFT) {
                alignment = TABLE_ALIGN_CENTER;
            } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
                alignment = TABLE_ALIGN_RIGHT;
            } else {
                alignment = TABLE_ALIGN_LEFT;
            }
        } else if (!whitespace(character)) {
            return;
        }

        index++;
    }

    if (alignment !== false) {
        align.push(alignment);
    }

    /* Exit when without enough columns. */
    if (align.length < MIN_TABLE_COLUMNS) {
        return;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    /* Parse the rows. */
    position = -1;
    rows = [];

    table = eat(subvalue).reset({
        type: 'table',
        align: align,
        children: rows,
        origin: origin,
        hash: hash(origin)
    });

    while (++position < lineCount) {
        line = lines[position];
        row = {type: 'tableRow', children: []};

        /* Eat a newline character when this is not the
         * first row. */
        if (position) {
            eat(C_NEWLINE);
        }

        /* Eat the row. */
        eat(line).reset(row, table);

        length = line.length + 1;
        index = 0;
        queue = '';
        cell = '';
        preamble = true;
        count = null;
        opening = null;

        while (index < length) {
            character = line.charAt(index);

            if (character === C_TAB || character === C_SPACE) {
                if (cell) {
                    queue += character;
                } else {
                    eat(character);
                }

                index++;
                continue;
            }

            if (character === '' || character === C_PIPE) {
                if (preamble) {
                    eat(character);
                } else {
                    if (character && opening) {
                        queue += character;
                        index++;
                        continue;
                    }

                    if ((cell || character) && !preamble) {
                        subvalue = cell;

                        if (queue.length > 1) {
                            if (character) {
                                subvalue += queue.slice(0, queue.length - 1);
                                queue = queue.charAt(queue.length - 1);
                            } else {
                                subvalue += queue;
                                queue = '';
                            }
                        }

                        now = eat.now();

                        eat(subvalue)({
                            type: 'tableCell',
                            children: self.tokenizeInline(cell, now)
                        }, row);
                    }

                    eat(queue + character);

                    queue = '';
                    cell = '';
                }
            } else {
                if (queue) {
                    cell += queue;
                    queue = '';
                }

                cell += character;

                if (character === C_BACKSLASH && index !== length - 2) {
                    cell += line.charAt(index + 1);
                    index++;
                }

                if (character === C_TICK) {
                    count = 1;

                    while (line.charAt(index + 1) === character) {
                        cell += character;
                        index++;
                        count++;
                    }

                    if (!opening) {
                        opening = count;
                    } else if (count >= opening) {
                        opening = 0;
                    }
                }
            }

            preamble = false;
            index++;
        }

        /* Eat the alignment row. */
        if (!position) {
            eat(C_NEWLINE + alignments);
        }
    }

    return table;
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hash = __webpack_require__(35);
var getLines = __webpack_require__(34);


var trim = __webpack_require__(37);
var decimal = __webpack_require__(13);
var trimTrailingLines = __webpack_require__(32);
var interrupt = __webpack_require__(38);

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
    var self = this;
    var settings = self.options;
    var commonmark = settings.commonmark;
    var gfm = settings.gfm;
    var tokenizers = self.blockTokenizers;
    var interruptors = self.interruptParagraph;
    var index = value.indexOf(C_NEWLINE);
    var length = value.length;
    var position;
    var subvalue;
    var character;
    var size;
    var now;

    while (index < length) {
        /* Eat everything if there’s no following newline. */
        if (index === -1) {
            index = length;
            break;
        }

        /* Stop if the next character is NEWLINE. */
        if (value.charAt(index + 1) === C_NEWLINE) {
            break;
        }

        /* In commonmark-mode, following indented lines
         * are part of the paragraph. */
        if (commonmark) {
            size = 0;
            position = index + 1;

            while (position < length) {
                character = value.charAt(position);

                if (character === C_TAB) {
                    size = TAB_SIZE;
                    break;
                } else if (character === C_SPACE) {
                    size++;
                } else {
                    break;
                }

                position++;
            }

            if (size >= TAB_SIZE) {
                index = value.indexOf(C_NEWLINE, index + 1);
                continue;
            }
        }

        subvalue = value.slice(index + 1);

        /* Check if the following code contains a possible
         * block. */
        if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
            break;
        }

        /* Break if the following line starts a list, when
         * already in a list, or when in commonmark, or when
         * in gfm mode and the bullet is *not* numeric. */
        if (
            tokenizers.list.call(self, eat, subvalue, true) &&
            (
                self.inList ||
                commonmark ||
                (gfm && !decimal(trim.left(subvalue).charAt(0)))
            )
        ) {
            break;
        }

        position = index;
        index = value.indexOf(C_NEWLINE, index + 1);

        if (index !== -1 && trim(value.slice(position, index)) === '') {
            index = position;
            break;
        }
    }

    subvalue = value.slice(0, index);

    if (trim(subvalue) === '') {
        eat(subvalue);

        return null;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    now = eat.now();
    subvalue = trimTrailingLines(subvalue);

    var origin = getLines(subvalue);

    return eat(subvalue)({
        type: 'paragraph',
        children: self.tokenizeInline(subvalue, now),
        origin: origin,
        hash: hash(origin)
    });
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(54);

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
    var self = this;
    var character;
    var node;

    if (value.charAt(0) === '\\') {
        character = value.charAt(1);

        if (self.escape.indexOf(character) !== -1) {
            /* istanbul ignore if - never used (yet) */
            if (silent) {
                return true;
            }

            if (character === '\n') {
                node = {type: 'break'};
            } else {
                node = {
                    type: 'text',
                    value: character
                };
            }

            return eat('\\' + character)(node);
        }
    }
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    return value.indexOf('\\', fromIndex);
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var decode = __webpack_require__(10);
var locate = __webpack_require__(56);

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
    var self;
    var subvalue;
    var length;
    var index;
    var queue;
    var character;
    var hasAtCharacter;
    var link;
    var now;
    var content;
    var tokenizers;
    var exit;

    if (value.charAt(0) !== C_LT) {
        return;
    }

    self = this;
    subvalue = '';
    length = value.length;
    index = 0;
    queue = '';
    hasAtCharacter = false;
    link = '';

    index++;
    subvalue = C_LT;

    while (index < length) {
        character = value.charAt(index);

        if (
            whitespace(character) ||
            character === C_GT ||
            character === C_AT_SIGN ||
            (character === ':' && value.charAt(index + 1) === C_SLASH)
        ) {
            break;
        }

        queue += character;
        index++;
    }

    if (!queue) {
        return;
    }

    link += queue;
    queue = '';

    character = value.charAt(index);
    link += character;
    index++;

    if (character === C_AT_SIGN) {
        hasAtCharacter = true;
    } else {
        if (
            character !== ':' ||
            value.charAt(index + 1) !== C_SLASH
        ) {
            return;
        }

        link += C_SLASH;
        index++;
    }

    while (index < length) {
        character = value.charAt(index);

        if (whitespace(character) || character === C_GT) {
            break;
        }

        queue += character;
        index++;
    }

    character = value.charAt(index);

    if (!queue || character !== C_GT) {
        return;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    link += queue;
    content = link;
    subvalue += link + character;
    now = eat.now();
    now.column++;
    now.offset++;

    if (hasAtCharacter) {
        if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
            content = content.substr(MAILTO_LENGTH);
            now.column += MAILTO_LENGTH;
            now.offset += MAILTO_LENGTH;
        } else {
            link = MAILTO + link;
        }
    }

    /* Temporarily remove all tokenizers except text in autolinks. */
    tokenizers = self.inlineTokenizers;
    self.inlineTokenizers = {text: tokenizers.text};

    exit = self.enterLink();

    content = self.tokenizeInline(content, now);

    self.inlineTokenizers = tokenizers;
    exit();

    return eat(subvalue)({
        type: 'link',
        title: null,
        url: decode(link, {nonTerminated: false}),
        children: content
    });
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    return value.indexOf('<', fromIndex);
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(10);
var whitespace = __webpack_require__(29);
var locate = __webpack_require__(58);

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
    HTTP_PROTOCOL,
    HTTPS_PROTOCOL,
    MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
    var self = this;
    var subvalue;
    var content;
    var character;
    var index;
    var position;
    var protocol;
    var match;
    var length;
    var queue;
    var parenCount;
    var nextCharacter;
    var exit;

    if (!self.options.gfm) {
        return;
    }

    subvalue = '';
    index = -1;
    length = PROTOCOLS_LENGTH;

    while (++index < length) {
        protocol = PROTOCOLS[index];
        match = value.slice(0, protocol.length);

        if (match.toLowerCase() === protocol) {
            subvalue = match;
            break;
        }
    }

    if (!subvalue) {
        return;
    }

    index = subvalue.length;
    length = value.length;
    queue = '';
    parenCount = 0;

    while (index < length) {
        character = value.charAt(index);

        if (whitespace(character) || character === C_LT) {
            break;
        }

        if (
            character === '.' ||
            character === ',' ||
            character === ':' ||
            character === ';' ||
            character === '"' ||
            character === '\'' ||
            character === ')' ||
            character === ']'
        ) {
            nextCharacter = value.charAt(index + 1);

            if (!nextCharacter || whitespace(nextCharacter)) {
                break;
            }
        }

        if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
            parenCount++;
        }

        if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
            parenCount--;

            if (parenCount < 0) {
                break;
            }
        }

        queue += character;
        index++;
    }

    if (!queue) {
        return;
    }

    subvalue += queue;
    content = subvalue;

    if (protocol === MAILTO_PROTOCOL) {
        position = queue.indexOf(C_AT_SIGN);

        if (position === -1 || position === length - 1) {
            return;
        }

        content = content.substr(MAILTO_PROTOCOL.length);
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    exit = self.enterLink();
    content = self.tokenizeInline(content, eat.now());
    exit();

    return eat(subvalue)({
        type: 'link',
        title: null,
        url: decode(subvalue, {nonTerminated: false}),
        children: content
    });
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
    var length = PROTOCOLS.length;
    var index = -1;
    var min = -1;
    var position;

    if (!this.options.gfm) {
        return -1;
    }

    while (++index < length) {
        position = value.indexOf(PROTOCOLS[index], fromIndex);

        if (position !== -1 && (position < min || min === -1)) {
            min = position;
        }
    }

    return min;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(16);
var locate = __webpack_require__(56);
var tag = __webpack_require__(46).tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
    var self = this;
    var length = value.length;
    var character;
    var subvalue;

    if (value.charAt(0) !== '<' || length < 3) {
        return;
    }

    character = value.charAt(1);

    if (
        !alphabetical(character) &&
        character !== '?' &&
        character !== '!' &&
        character !== '/'
    ) {
        return;
    }

    subvalue = value.match(tag);

    if (!subvalue) {
        return;
    }

    /* istanbul ignore if - not used yet. */
    if (silent) {
        return true;
    }

    subvalue = subvalue[0];

    if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
        self.inLink = true;
    } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
        self.inLink = false;
    }

    return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var locate = __webpack_require__(61);

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
    var self = this;
    var subvalue = '';
    var index = 0;
    var character = value.charAt(0);
    var pedantic = self.options.pedantic;
    var commonmark = self.options.commonmark;
    var gfm = self.options.gfm;
    var closed;
    var count;
    var opening;
    var beforeURL;
    var beforeTitle;
    var subqueue;
    var hasMarker;
    var markers;
    var isImage;
    var content;
    var marker;
    var length;
    var title;
    var depth;
    var queue;
    var url;
    var now;
    var exit;
    var node;

    /* Detect whether this is an image. */
    if (character === '!') {
        isImage = true;
        subvalue = character;
        character = value.charAt(++index);
    }

    /* Eat the opening. */
    if (character !== C_BRACKET_OPEN) {
        return;
    }

    /* Exit when this is a link and we’re already inside
     * a link. */
    if (!isImage && self.inLink) {
        return;
    }

    subvalue += character;
    queue = '';
    index++;

    /* Eat the content. */
    length = value.length;
    now = eat.now();
    depth = 0;

    now.column += index;
    now.offset += index;

    while (index < length) {
        character = value.charAt(index);
        subqueue = character;

        if (character === C_TICK) {
            /* Inline-code in link content. */
            count = 1;

            while (value.charAt(index + 1) === C_TICK) {
                subqueue += character;
                index++;
                count++;
            }

            if (!opening) {
                opening = count;
            } else if (count >= opening) {
                opening = 0;
            }
        } else if (character === C_BACKSLASH) {
            /* Allow brackets to be escaped. */
            index++;
            subqueue += value.charAt(index);
            /* In GFM mode, brackets in code still count.
             * In all other modes, they don’t.  This empty
             * block prevents the next statements are
             * entered. */
        } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
            depth++;
        } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
            if (depth) {
                depth--;
            } else {
                /* Allow white-space between content and
                 * url in GFM mode. */
                if (!pedantic) {
                    while (index < length) {
                        character = value.charAt(index + 1);

                        if (!whitespace(character)) {
                            break;
                        }

                        subqueue += character;
                        index++;
                    }
                }

                if (value.charAt(index + 1) !== C_PAREN_OPEN) {
                    return;
                }

                subqueue += C_PAREN_OPEN;
                closed = true;
                index++;

                break;
            }
        }

        queue += subqueue;
        subqueue = '';
        index++;
    }

    /* Eat the content closing. */
    if (!closed) {
        return;
    }

    content = queue;
    subvalue += queue + subqueue;
    index++;

    /* Eat white-space. */
    while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
            break;
        }

        subvalue += character;
        index++;
    }

    /* Eat the URL. */
    character = value.charAt(index);
    markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
    queue = '';
    beforeURL = subvalue;

    if (character === C_LT) {
        index++;
        beforeURL += C_LT;

        while (index < length) {
            character = value.charAt(index);

            if (character === C_GT) {
                break;
            }

            if (commonmark && character === '\n') {
                return;
            }

            queue += character;
            index++;
        }

        if (value.charAt(index) !== C_GT) {
            return;
        }

        subvalue += C_LT + queue + C_GT;
        url = queue;
        index++;
    } else {
        character = null;
        subqueue = '';

        while (index < length) {
            character = value.charAt(index);

            if (subqueue && own.call(markers, character)) {
                break;
            }

            if (whitespace(character)) {
                if (!pedantic) {
                    break;
                }

                subqueue += character;
            } else {
                if (character === C_PAREN_OPEN) {
                    depth++;
                } else if (character === C_PAREN_CLOSE) {
                    if (depth === 0) {
                        break;
                    }

                    depth--;
                }

                queue += subqueue;
                subqueue = '';

                if (character === C_BACKSLASH) {
                    queue += C_BACKSLASH;
                    character = value.charAt(++index);
                }

                queue += character;
            }

            index++;
        }

        subvalue += queue;
        url = queue;
        index = subvalue.length;
    }

    /* Eat white-space. */
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
            break;
        }

        queue += character;
        index++;
    }

    character = value.charAt(index);
    subvalue += queue;

    /* Eat the title. */
    if (queue && own.call(markers, character)) {
        index++;
        subvalue += character;
        queue = '';
        marker = markers[character];
        beforeTitle = subvalue;

        /* In commonmark-mode, things are pretty easy: the
         * marker cannot occur inside the title.
         *
         * Non-commonmark does, however, support nested
         * delimiters. */
        if (commonmark) {
            while (index < length) {
                character = value.charAt(index);

                if (character === marker) {
                    break;
                }

                if (character === C_BACKSLASH) {
                    queue += C_BACKSLASH;
                    character = value.charAt(++index);
                }

                index++;
                queue += character;
            }

            character = value.charAt(index);

            if (character !== marker) {
                return;
            }

            title = queue;
            subvalue += queue + character;
            index++;

            while (index < length) {
                character = value.charAt(index);

                if (!whitespace(character)) {
                    break;
                }

                subvalue += character;
                index++;
            }
        } else {
            subqueue = '';

            while (index < length) {
                character = value.charAt(index);

                if (character === marker) {
                    if (hasMarker) {
                        queue += marker + subqueue;
                        subqueue = '';
                    }

                    hasMarker = true;
                } else if (!hasMarker) {
                    queue += character;
                } else if (character === C_PAREN_CLOSE) {
                    subvalue += queue + marker + subqueue;
                    title = queue;
                    break;
                } else if (whitespace(character)) {
                    subqueue += character;
                } else {
                    queue += marker + subqueue + character;
                    subqueue = '';
                    hasMarker = false;
                }

                index++;
            }
        }
    }

    if (value.charAt(index) !== C_PAREN_CLOSE) {
        return;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    subvalue += C_PAREN_CLOSE;

    url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {nonTerminated: false});

    if (title) {
        beforeTitle = eat(beforeTitle).test().end;
        title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    node = {
        type: isImage ? 'image' : 'link',
        title: title || null,
        url: url
    };

    if (isImage) {
        node.alt = self.decode.raw(self.unescape(content), now) || null;
    } else {
        exit = self.enterLink();
        node.children = self.tokenizeInline(content, now);
        exit();
    }

    return eat(subvalue)(node);
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    var link = value.indexOf('[', fromIndex);
    var image = value.indexOf('![', fromIndex);

    if (image === -1) {
        return link;
    }

    /* Link can never be `-1` if an image is found, so we don’t need
     * to check for that :) */
    return link < image ? link : image;
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var locate = __webpack_require__(61);
var normalize = __webpack_require__(48);

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
    var self = this;
    var character = value.charAt(0);
    var index = 0;
    var length = value.length;
    var subvalue = '';
    var intro = '';
    var type = T_LINK;
    var referenceType = REFERENCE_TYPE_SHORTCUT;
    var content;
    var identifier;
    var now;
    var node;
    var exit;
    var queue;
    var bracketed;
    var depth;

    /* Check whether we’re eating an image. */
    if (character === '!') {
        type = T_IMAGE;
        intro = character;
        character = value.charAt(++index);
    }

    if (character !== C_BRACKET_OPEN) {
        return;
    }

    index++;
    intro += character;
    queue = '';

    /* Check whether we’re eating a footnote. */
    if (self.options.footnotes && value.charAt(index) === C_CARET) {
        /* Exit if `![^` is found, so the `!` will be seen as text after this,
         * and we’ll enter this function again when `[^` is found. */
        if (type === T_IMAGE) {
            return;
        }

        intro += C_CARET;
        index++;
        type = T_FOOTNOTE;
    }

    /* Eat the text. */
    depth = 0;

    while (index < length) {
        character = value.charAt(index);

        if (character === C_BRACKET_OPEN) {
            bracketed = true;
            depth++;
        } else if (character === C_BRACKET_CLOSE) {
            if (!depth) {
                break;
            }

            depth--;
        }

        if (character === C_BACKSLASH) {
            queue += C_BACKSLASH;
            character = value.charAt(++index);
        }

        queue += character;
        index++;
    }

    subvalue = queue;
    content = queue;
    character = value.charAt(index);

    if (character !== C_BRACKET_CLOSE) {
        return;
    }

    index++;
    subvalue += character;
    queue = '';

    while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
            break;
        }

        queue += character;
        index++;
    }

    character = value.charAt(index);

    /* Inline footnotes cannot have an identifier. */
    if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
        identifier = '';
        queue += character;
        index++;

        while (index < length) {
            character = value.charAt(index);

            if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
                break;
            }

            if (character === C_BACKSLASH) {
                identifier += C_BACKSLASH;
                character = value.charAt(++index);
            }

            identifier += character;
            index++;
        }

        character = value.charAt(index);

        if (character === C_BRACKET_CLOSE) {
            referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
            queue += identifier + character;
            index++;
        } else {
            identifier = '';
        }

        subvalue += queue;
        queue = '';
    } else {
        if (!content) {
            return;
        }

        identifier = content;
    }

    /* Brackets cannot be inside the identifier. */
    if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
        return;
    }

    subvalue = intro + subvalue;

    if (type === T_LINK && self.inLink) {
        return null;
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
        return eat(subvalue)({
            type: 'footnote',
            children: this.tokenizeInline(content, eat.now())
        });
    }

    now = eat.now();
    now.column += intro.length;
    now.offset += intro.length;
    identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

    node = {
        type: type + 'Reference',
        identifier: normalize(identifier)
    };

    if (type === T_LINK || type === T_IMAGE) {
        node.referenceType = referenceType;
    }

    if (type === T_LINK) {
        exit = self.enterLink();
        node.children = self.tokenizeInline(content, now);
        exit();
    } else if (type === T_IMAGE) {
        node.alt = self.decode.raw(self.unescape(content), now) || null;
    }

    return eat(subvalue)(node);
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(37);
var whitespace = __webpack_require__(29);
var locate = __webpack_require__(64);

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
    var self = this;
    var index = 0;
    var character = value.charAt(index);
    var now;
    var pedantic;
    var marker;
    var queue;
    var subvalue;
    var length;
    var prev;

    if (
        (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
        value.charAt(++index) !== character
    ) {
        return;
    }

    pedantic = self.options.pedantic;
    marker = character;
    subvalue = marker + marker;
    length = value.length;
    index++;
    queue = '';
    character = '';

    if (pedantic && whitespace(value.charAt(index))) {
        return;
    }

    while (index < length) {
        prev = character;
        character = value.charAt(index);

        if (
            character === marker &&
            value.charAt(index + 1) === marker &&
            (!pedantic || !whitespace(prev))
        ) {
            character = value.charAt(index + 2);

            if (character !== marker) {
                if (!trim(queue)) {
                    return;
                }

                /* istanbul ignore if - never used (yet) */
                if (silent) {
                    return true;
                }

                now = eat.now();
                now.column += 2;
                now.offset += 2;

                return eat(subvalue + queue + subvalue)({
                    type: 'strong',
                    children: self.tokenizeInline(queue, now)
                });
            }
        }

        if (!pedantic && character === '\\') {
            queue += character;
            character = value.charAt(++index);
        }

        queue += character;
        index++;
    }
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    var asterisk = value.indexOf('**', fromIndex);
    var underscore = value.indexOf('__', fromIndex);

    if (underscore === -1) {
        return asterisk;
    }

    if (asterisk === -1) {
        return underscore;
    }

    return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(37);
var word = __webpack_require__(66);
var whitespace = __webpack_require__(29);
var locate = __webpack_require__(67);

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
    var self = this;
    var index = 0;
    var character = value.charAt(index);
    var now;
    var pedantic;
    var marker;
    var queue;
    var subvalue;
    var length;
    var prev;

    if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
        return;
    }

    pedantic = self.options.pedantic;
    subvalue = character;
    marker = character;
    length = value.length;
    index++;
    queue = '';
    character = '';

    if (pedantic && whitespace(value.charAt(index))) {
        return;
    }

    while (index < length) {
        prev = character;
        character = value.charAt(index);

        if (character === marker && (!pedantic || !whitespace(prev))) {
            character = value.charAt(++index);

            if (character !== marker) {
                if (!trim(queue) || prev === marker) {
                    return;
                }

                if (!pedantic && marker === C_UNDERSCORE && word(character)) {
                    queue += marker;
                    continue;
                }

                /* istanbul ignore if - never used (yet) */
                if (silent) {
                    return true;
                }

                now = eat.now();
                now.column++;
                now.offset++;

                return eat(subvalue + queue + marker)({
                    type: 'emphasis',
                    children: self.tokenizeInline(queue, now)
                });
            }

            queue += marker;
        }

        if (!pedantic && character === '\\') {
            queue += character;
            character = value.charAt(++index);
        }

        queue += character;
        index++;
    }
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

/* Check if the given character code, or the character
 * code at the first character, is a word character. */
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    var asterisk = value.indexOf('*', fromIndex);
    var underscore = value.indexOf('_', fromIndex);

    if (underscore === -1) {
        return asterisk;
    }

    if (asterisk === -1) {
        return underscore;
    }

    return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var locate = __webpack_require__(69);

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
    var self = this;
    var character = '';
    var previous = '';
    var preceding = '';
    var subvalue = '';
    var index;
    var length;
    var now;

    if (
        !self.options.gfm ||
        value.charAt(0) !== C_TILDE ||
        value.charAt(1) !== C_TILDE ||
        whitespace(value.charAt(2))
    ) {
        return;
    }

    index = 1;
    length = value.length;
    now = eat.now();
    now.column += 2;
    now.offset += 2;

    while (++index < length) {
        character = value.charAt(index);

        if (
            character === C_TILDE &&
            previous === C_TILDE &&
            (!preceding || !whitespace(preceding))
        ) {
            /* istanbul ignore if - never used (yet) */
            if (silent) {
                return true;
            }

            return eat(DOUBLE + subvalue + DOUBLE)({
                type: 'delete',
                children: self.tokenizeInline(subvalue, now)
            });
        }

        subvalue += previous;
        preceding = previous;
        previous = character;
    }
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    return value.indexOf('~~', fromIndex);
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(29);
var locate = __webpack_require__(71);

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
    var length = value.length;
    var index = 0;
    var queue = '';
    var tickQueue = '';
    var contentQueue;
    var subqueue;
    var count;
    var openingCount;
    var subvalue;
    var character;
    var found;
    var next;

    while (index < length) {
        if (value.charAt(index) !== C_TICK) {
            break;
        }

        queue += C_TICK;
        index++;
    }

    if (!queue) {
        return;
    }

    subvalue = queue;
    openingCount = index;
    queue = '';
    next = value.charAt(index);
    count = 0;

    while (index < length) {
        character = next;
        next = value.charAt(index + 1);

        if (character === C_TICK) {
            count++;
            tickQueue += character;
        } else {
            count = 0;
            queue += character;
        }

        if (count && next !== C_TICK) {
            if (count === openingCount) {
                subvalue += queue + tickQueue;
                found = true;
                break;
            }

            queue += tickQueue;
            tickQueue = '';
        }

        index++;
    }

    if (!found) {
        if (openingCount % 2 !== 0) {
            return;
        }

        queue = '';
    }

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    contentQueue = '';
    subqueue = '';
    length = queue.length;
    index = -1;

    while (++index < length) {
        character = queue.charAt(index);

        if (whitespace(character)) {
            subqueue += character;
            continue;
        }

        if (subqueue) {
            if (contentQueue) {
                contentQueue += subqueue;
            }

            subqueue = '';
        }

        contentQueue += character;
    }

    return eat(subvalue)({
        type: 'inlineCode',
        value: contentQueue
    });
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    return value.indexOf('`', fromIndex);
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(73);

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
    var length = value.length;
    var index = -1;
    var queue = '';
    var character;

    while (++index < length) {
        character = value.charAt(index);

        if (character === '\n') {
            if (index < MIN_BREAK_LENGTH) {
                return;
            }

            /* istanbul ignore if - never used (yet) */
            if (silent) {
                return true;
            }

            queue += character;

            return eat(queue)({type: 'break'});
        }

        if (character !== ' ') {
            return;
        }

        queue += character;
    }
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
    var index = value.indexOf('\n', fromIndex);

    while (index > fromIndex) {
        if (value.charAt(index - 1) !== ' ') {
            break;
        }

        index--;
    }

    return index;
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
    var self = this;
    var methods;
    var tokenizers;
    var index;
    var length;
    var subvalue;
    var position;
    var tokenizer;
    var name;
    var min;
    var now;

    /* istanbul ignore if - never used (yet) */
    if (silent) {
        return true;
    }

    methods = self.inlineMethods;
    length = methods.length;
    tokenizers = self.inlineTokenizers;
    index = -1;
    min = value.length;

    while (++index < length) {
        name = methods[index];

        if (name === 'text' || !tokenizers[name]) {
            continue;
        }

        tokenizer = tokenizers[name].locator;

        if (!tokenizer) {
            eat.file.fail('Missing locator: `' + name + '`');
        }

        position = tokenizer.call(self, value, 1);

        if (position !== -1 && position < min) {
            min = position;
        }
    }

    subvalue = value.slice(0, min);
    now = eat.now();

    self.decode(subvalue, now, function (content, position, source) {
        eat(source || content)({
            type: 'text',
            value: content
        });
    });
}


/***/ })
/******/ ]);