package gov.carlsbadca.common;

import java.util.Set;

import com.inductiveautomation.perspective.common.api.BrowserResource;

public class CarlsbadComponents {

    public static final String MODULE_ID = "gov.carlsbadca.carlsbadcomponents";
    public static final String URL_ALIAS = "carlsbadcomponents";
    public static final String COMPONENT_CATEGORY = "Carlsbad Things";
    public static final Set<BrowserResource> BROWSER_RESOURCES =
        Set.of(
            new BrowserResource(
                "carlsbad-components-js",
                String.format("/res/%s/CarlsbadComponents.js", URL_ALIAS),
                BrowserResource.ResourceType.JS
            ),
            new BrowserResource("carlsbad-components-css",
                String.format("/res/%s/CarlsbadComponents.css", URL_ALIAS),
                BrowserResource.ResourceType.CSS
            )
        );
}
