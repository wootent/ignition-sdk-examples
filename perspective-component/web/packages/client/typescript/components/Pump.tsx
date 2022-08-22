/**
 * Example of a component which displays an image, given a URL.
 */
import * as React from 'react';
import {
    Component,
    ComponentMeta,
    ComponentProps,
    PComponent,
    PropertyTree,
    SizeObject
} from '@inductiveautomation/perspective-client';


// The 'key' or 'id' for this component type.  Component must be registered with this EXACT key in the Java side as well
// as on the client side.  In the client, this is done in the index file where we import and register through the
// ComponentRegistry provided by the perspective-client API.
export const COMPONENT_TYPE = "carlsbad.display.pump";


// This is the shape of the properties we get from the perspective 'props' property tree.
export interface PumpProps {
    name: string;
    id: string;
    mode: string;
    status: string;
}

export class Pump extends Component<ComponentProps<PumpProps>, any> {
    render() {

        // destructure props for readablity
        const { props: { name, id, mode, status } } = this.props;

        return (
            <div>
                <div>
                    <h1>{name}</h1>
                </div>
                    <svg>
                        <path d="m 126.24325,149.22974 -23.63284,0.14442 -23.632829,0.14442 11.691342,-20.53884 11.691347,-20.53885 11.94149,20.39442 z" transform="matrix(0.8503915,0,0,0.57506715,-52.330568,-30.131824)" className="pump-centrifugal" />
                        <path d="m 35.209458,14.594802 a 18.790539,16.966217 0 0 0 -18.790588,16.96589 18.790539,16.966217 0 0 0 18.790588,16.9664 18.790539,16.966217 0 0 0 18.79058,-16.9664 18.790539,16.966217 0 0 0 -0.18603,-2.37143 h 4.56457 v -13.86479 h -17.71984 a 18.790539,16.966217 0 0 0 -5.44928,-0.72967 z" className="pump-centrifugal" />
                    </svg>
                <div>
                    <h1>{id}</h1>
                </div>
                <h2>{mode}</h2>
                <h2>{status}</h2>
            </div>
        );
    }
}


// This is the actual thing that gets registered with the component registry.
export class PumpMeta implements ComponentMeta {

    getComponentType(): string {
        return COMPONENT_TYPE;
    }

    // the class or React Type that this component provides
    getViewComponent(): PComponent {
        return Pump;
    }

    getDefaultSize(): SizeObject {
        return ({
            width: 360,
            height: 360
        });
    }

    // effectively mapping the state of the tree to component props.
    getPropsReducer(tree: PropertyTree): PumpProps {
        return {
            name: tree.readString("name", ""),
            id: tree.readString("id", ""),
            mode: tree.readString("mode", ""),
            status: tree.readString("status", "")
        };
    }
}
