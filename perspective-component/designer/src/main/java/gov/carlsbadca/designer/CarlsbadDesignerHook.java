package gov.carlsbadca.designer;

import com.inductiveautomation.ignition.common.BundleUtil;
import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.designer.model.AbstractDesignerModuleHook;
import com.inductiveautomation.ignition.designer.model.DesignerContext;
import com.inductiveautomation.perspective.designer.DesignerComponentRegistry;
import com.inductiveautomation.perspective.designer.api.PerspectiveDesignerInterface;
import gov.carlsbadca.common.component.display.Image;



/**
 * The 'hook' class for the designer scope of the module.  Registered in the ignitionModule configuration of the
 * root build.gradle file.
 */
public class CarlsbadDesignerHook extends AbstractDesignerModuleHook {
    private static final LoggerEx logger = LoggerEx.newBuilder().build("CarlsbadComponents");

    private DesignerContext context;
    private DesignerComponentRegistry registry;

    static {
        BundleUtil.get().addBundle("carlsbadcomponents", CarlsbadDesignerHook.class.getClassLoader(), "carlsbadcomponents");
    }

    /**
     * 
     */
    public CarlsbadDesignerHook() {
        logger.info("Registering Carlsbad Components in Designer!");
    }

    /* (non-Javadoc)
     * @see com.inductiveautomation.ignition.designer.model.AbstractDesignerModuleHook#startup(com.inductiveautomation.ignition.designer.model.DesignerContext, com.inductiveautomation.ignition.common.licensing.LicenseState)
     */
    @Override
    public void startup(DesignerContext context, LicenseState activationState) {
        this.context = context;
        init();
    }

    /**
     * 
     */
    private void init() {
        logger.debug("Initializing registry entrants...");

        PerspectiveDesignerInterface pdi = PerspectiveDesignerInterface.get(context);

        registry = pdi.getDesignerComponentRegistry();

        // register components to get them on the palette
        registry.registerComponent(Image.DESCRIPTOR);

    }


    /* (non-Javadoc)
     * @see com.inductiveautomation.ignition.designer.model.AbstractDesignerModuleHook#shutdown()
     */
    @Override
    public void shutdown() {
        removeComponents();
    }

    /**
     * 
     */
    private void removeComponents() {
        registry.removeComponent(Image.COMPONENT_ID);

    }
}
