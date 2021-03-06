import { getMetadataArgsStorage } from "../../";
/**
 * Special type of the table used in the single-table inherited tables.
 */
export function ChildEntity(discriminatorValue) {
    return function (target) {
        // register a table metadata
        getMetadataArgsStorage().tables.push({
            target: target,
            type: "entity-child",
        });
        // register discriminator value if it was provided
        if (discriminatorValue) {
            getMetadataArgsStorage().discriminatorValues.push({
                target: target,
                value: discriminatorValue
            });
        }
    };
}

//# sourceMappingURL=ChildEntity.js.map
