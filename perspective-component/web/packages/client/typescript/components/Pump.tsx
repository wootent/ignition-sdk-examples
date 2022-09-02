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
    propsControl: boolean;
    propsId: boolean;
    propsName: boolean;
    control: string;
    id: string;
    mode: string;
    name: string;
    status: string;
}

export class Pump extends Component<ComponentProps<PumpProps>, any> {
    render() {

        // destructure props for readablity
        const { props: { propsControl, propsId, propsName, control, id, mode, name, status }, emit } = this.props;

        return (
            // Pump component
            <div className='pump-component' {...emit()}>
                {/* Id label, show only if propsId is set to true */}
                {propsId ? <label className='pump-label'>{id}</label> : null}
                {/* Name label, show only if propsName is set to true */}
                {propsName ? <label className='pump-label'>{name}</label> : null}
                {/* Pump icon */}
                <svg viewBox='0 0 100 100'>
                    <path d="M 25.193551,52.516126 37.410469,31.26914 49.627384,10.02215 61.919355,31.225805 74.21133,52.429459 49.702441,52.472791 Z" transform="matrix(1.4486251,0,0,1.1097662,-24.604497,33.135839)" className={status} />
                    <path d="M 47.548574,8.1610437 A 37.258064,35.129032 0 0 0 10.290383,43.290165 37.258064,35.129032 0 0 0 47.548574,78.419287 37.258064,35.129032 0 0 0 84.806248,43.290165 37.258064,35.129032 0 0 0 82.105121,30.161251 h 8.378816 V 8.8710779 H 54.997215 A 37.258064,35.129032 0 0 0 47.548574,8.1610437 Z" className={status} />
                </svg>
                {/* Control label, show only if propsControl is set to true */}
                {propsControl ? <label className='pump-label'>{control}</label> : null}
                {/* Mode label, show only if control is set to Remote */}
                {control === "Remote" ? <label className='pump-label'>{mode}</label> : null}
                {/* status label */}
                <label className='pump-label'>{status}</label>
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
            width: 100,
            height: 150
        });
    }

    // effectively mapping the state of the tree to component props.
    getPropsReducer(tree: PropertyTree): PumpProps {
        return {
            propsControl: tree.readBoolean("propsControl"),
            propsId: tree.readBoolean("propsId"),
            propsName: tree.readBoolean("propsName"),
            control: tree.readString("control", ""),
            id: tree.readString("id", ""),
            mode: tree.readString("mode", ""),
            name: tree.readString("name", ""),
            status: tree.readString("status", "")
        };
    }
}
