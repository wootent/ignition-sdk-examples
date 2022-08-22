package gov.carlsbadca.common.component.display;

import com.inductiveautomation.ignition.common.jsonschema.JsonSchema;
import com.inductiveautomation.perspective.common.api.ComponentDescriptor;
import com.inductiveautomation.perspective.common.api.ComponentDescriptorImpl;
import gov.carlsbadca.common.CarlsbadComponents;


/**
 * Describes the component to the Java registry so the gateway and designer know to look for the front end elements.
 * In a 'common' scope so that it's referencable by both gateway and designer.
 */
public class Pump  {

    // unique ID of the component which perfectly matches that provided in the javascript's ComponentMeta implementation
    public static String COMPONENT_ID = "carlsbad.display.pump";

    /**
     * The schema provided with the component descriptor. Use a schema instead of a plain JsonObject because it gives
     * us a little more type information, allowing the designer to highlight mismatches where it can detect them.
     */
    public static JsonSchema SCHEMA =
        JsonSchema.parse(CarlsbadComponents.class.getResourceAsStream("/carlsbadpump.props.json"));

    /**
     * Components register with the Java side ComponentRegistry but providing a ComponentDescriptor.  Here we
     * build the descriptor for this one component. Icons on the component palette are optional.
     */
    public static ComponentDescriptor DESCRIPTOR = ComponentDescriptorImpl.ComponentBuilder.newBuilder()
        .setPaletteCategory(CarlsbadComponents.COMPONENT_CATEGORY)
        .setId(COMPONENT_ID)
        .setModuleId(CarlsbadComponents.MODULE_ID)
        .setSchema(SCHEMA)
        .setName("Carlsbad Pump")
        .addPaletteEntry("", "Carlsbad Pump", "A simple Pump component.", null, null)
        .setDefaultMetaName("carlsbadPump")
        .setResources(CarlsbadComponents.BROWSER_RESOURCES)
        .build();

}
