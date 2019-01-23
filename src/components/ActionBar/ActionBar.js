import React, {Component} from "react";

import "./ActionBar.css";

class ActionBar extends Component {
    render() {
        return (
            <div className={"action"}>
                <div className={"run"}>
                    <svg width="60" height="60" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <filter id="dropshadow" height="130%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                            <feOffset dx="2" dy="2" result="offsetblur"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.5"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <path d="M35 19.268C36.3333 20.0378 36.3333 21.9622 35 22.732L3.5 40.9186C2.16667 41.6884 0.5 40.7261 0.5 39.1865L0.5 2.81347C0.5 1.27387 2.16667 0.311615 3.5 1.08142L35 19.268Z" fill="#5C7BCA"/>
                    </svg>
                </div>
                <div className={"stop"}>
                    <svg width="50" height="50" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <filter id="dropshadow" height="130%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                            <feOffset dx="2" dy="2" result="offsetblur"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.5"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <rect width="35" height="35" rx="2" fill="#AB0000" />
                    </svg>
                </div>
                <div className={"disconnect"}>
                    <svg width="50" height="50" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <filter id="dropshadow" height="130%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                            <feOffset dx="2" dy="2" result="offsetblur"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.5"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <circle cx="17.5" cy="17.5" r="17.5" fill="black"/>
                        <path d="M22 13H18V14.9H22C23.71 14.9 25.1 16.29 25.1 18C25.1 19.43 24.12 20.63 22.79 20.98L24.25 22.44C25.88 21.61 27 19.95 27 18C27 15.24 24.76 13 22 13ZM21 17H18.81L20.81 19H21V17ZM7 10.27L10.11 13.38C8.29 14.12 7 15.91 7 18C7 20.76 9.24 23 12 23H16V21.1H12C10.29 21.1 8.9 19.71 8.9 18C8.9 16.41 10.11 15.1 11.66 14.93L13.73 17H13V19H15.73L18 21.27V23H19.73L23.74 27L25 25.74L8.27 9L7 10.27Z" fill="white"/>
                    </svg>
                </div>
                <select className={"profile"}>
                    <option>Profile 1</option>
                    <option>Profile 2</option>
                    <option>Profile 3</option>
                </select>
            </div>
        )
    }
}

export default ActionBar;