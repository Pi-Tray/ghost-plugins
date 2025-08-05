import type { Plugin } from "pi-tray-server/src/types";

import robot from "@jitsi/robotjs";

const MODIFIER_NAMES = ["shift", "control", "alt", "command"];

export default {
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

    handle_push: async ({config}) => {
        if (!config || !config.key) {
            throw new Error("Must specify a key in the config");
        }

        if (typeof config.key !== "string") {
            throw new Error("Key name must be a string");
        }

        const key = config.key.toLowerCase();

        let modifiers = new Set<string>();
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

        robot.keyTap(key, Array.from(modifiers));
    }
} as Plugin;
