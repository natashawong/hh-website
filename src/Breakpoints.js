import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
 desktop: '(min-width: 992px)',
 tablet: '(min-width: 768px) and (max-width: 991px)',
 mobile: '(max-width: 767px)',
 tabletAndMobile: '(max-width: 991px)',
};

function Breakpoint(props) {
const breakpoint = breakpoints[props.name] || breakpoints.desktop;
    return (
        <MediaQuery {...props} query={breakpoint}>
            {props.children}
        </MediaQuery>
    );
}

// Breakpoints
export function DesktopBreakpoint(props) {
    return (
    <Breakpoint name="desktop">
    {props.children}
    </Breakpoint>
    );
}

export function TabletBreakpoint(props) {
    return (
    <Breakpoint name="tablet">
    {props.children}
    </Breakpoint>
    );
}

export function MobileBreakpoint(props) {
    return (
    <Breakpoint name="mobile">
    {props.children}
    </Breakpoint>
    );
}

export function TabletAndMobileBreakpoint(props) {
    return (
        <Breakpoint name='tabletAndMobile'>
        {props.children}
        </Breakpoint>
    )
}