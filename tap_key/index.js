"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("@jitsi/robotjs"));
const MODIFIER_NAMES = ["shift", "control", "alt", "command"];
exports.default = {
    display_name: "Tap a keyboard key",
    config_template: {
        key: {
            type: "string",
            description: "The name of the key to press. See https://web.archive.org/web/20161019170550/http://robotjs.io/docs/syntax#keys for a list."
        },
        modifiers: {
            type: "array",
            optional: true,
            description: "An optional array of modifiers to press: \"shift\", \"control\", \"alt\", \"command\" (Mac)",
            items: {
                type: "string"
            }
        }
    },
    handle_push: (_a) => __awaiter(void 0, [_a], void 0, function* ({ config }) {
        if (!config || !config.key) {
            throw new Error("Must specify a key in the config");
        }
        if (typeof config.key !== "string") {
            throw new Error("Key name must be a string");
        }
        const key = config.key.toLowerCase();
        let modifiers = new Set();
        if (config.modifiers) {
            if (typeof !Array.isArray(config.modifiers)) {
                throw new Error("Modifiers must be an array if passed");
            }
            for (let modifier of config.modifiers) {
                if (typeof modifier !== "string") {
                    throw new Error("Modifiers must be an array of strings if passed");
                }
                modifier = modifier.toLowerCase();
                if (!MODIFIER_NAMES.includes(modifier)) {
                    throw new Error(`Invalid modifier: ${modifier}`);
                }
                modifiers.add(modifier);
            }
        }
        robotjs_1.default.keyTap(key, Array.from(modifiers));
    })
};
