const SVG_NS = "http://www.w3.org/2000/svg";

const GRID = 25;
const CANVAS_WIDTH = 8000;
const CANVAS_HEIGHT = 6000;

const COMPONENT_WIDTH = 100;
const TERMINAL_DISTANCE = COMPONENT_WIDTH / 2;

const AUTO_CONNECT_DISTANCE = 40;

/* =========================================================
   COMPONENT SVG IMAGES
========================================================= */

const componentSVG = {
    battery: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50">
            <line x1="0" y1="25" x2="43" y2="25"
                  stroke="black" stroke-width="4"/>

            <line x1="43" y1="14" x2="43" y2="36"
                  stroke="black" stroke-width="4"/>

            <line x1="65" y1="6" x2="65" y2="44"
                  stroke="black" stroke-width="4"/>

            <line x1="65" y1="25" x2="120" y2="25"
                  stroke="black" stroke-width="4"/>

            <text x="20" y="16" font-size="16">−</text>
            <text x="78" y="16" font-size="16">+</text>
        </svg>
    `,

    resistor: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50">
            <polyline
                points="
                    0,25
                    20,25
                    28,10
                    40,40
                    52,10
                    64,40
                    76,10
                    88,40
                    96,25
                    120,25
                "
                fill="none"
                stroke="black"
                stroke-width="4"
                stroke-linejoin="round"
            />
        </svg>
    `,

    diode: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50">
            <line x1="0" y1="25" x2="34" y2="25"
                  stroke="black" stroke-width="4"/>

            <polygon
                points="34,8 34,42 72,25"
                fill="white"
                stroke="black"
                stroke-width="4"
            />

            <line x1="77" y1="8" x2="77" y2="42"
                  stroke="black" stroke-width="4"/>

            <line x1="77" y1="25" x2="120" y2="25"
                  stroke="black" stroke-width="4"/>
        </svg>
    `,

    led: `
        <svg class="led-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 60">
            <g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                <line class="led-lead" x1="0" y1="27" x2="30" y2="27" stroke-width="4"/>
                <polygon class="led-diode-body" points="30,9 30,45 68,27" fill="white" stroke-width="4"/>
                <line class="led-cathode" x1="74" y1="10" x2="74" y2="46" stroke-width="4"/>
                <line class="led-lead" x1="74" y1="27" x2="110" y2="27" stroke-width="4"/></g>
                <!-- Light beams -->
        <line class="led-beam beam-one"
              x1="58"
              y1="14"
              x2="82"
              y2="-2"
              stroke-width="2.5"/>

        <line class="led-beam beam-two"
              x1="68"
              y1="22"
              x2="93"
              y2="7"
              stroke-width="2.5"/>

        <!-- Beam tips -->
        <line class="led-beam"
              x1="82"
              y1="-2"
              x2="78"
              y2="0"
              stroke-width="2.5"/>

        <line class="led-beam"
              x1="82"
              y1="-2"
              x2="80"
              y2="4"
              stroke-width="2.5"/>

        <line class="led-beam"
              x1="93"
              y1="7"
              x2="89"
              y2="9"
              stroke-width="2.5"/>

        <line class="led-beam"
              x1="93"
              y1="7"
              x2="91"
              y2="13"
              stroke-width="2.5"/>
<path class="led-link"
      d="M32 27 H67"
      stroke-width="3"/>

<path class="led-break-left"
      d="M32 27 H46 L51 22"
      stroke-width="3"/>

<path class="led-break-right"
      d="M57 32 L63 27 H68"
      stroke-width="3"/>

<circle class="led-spark led-spark-one"
        cx="53"
        cy="22"
        r="2.2"
        fill="#ffb000"/>

<circle class="led-spark led-spark-two"
        cx="58"
        cy="33"
        r="1.8"
        fill="#ff3b00"/>
        </svg>

    `,

    switch: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50">
            <line x1="0" y1="30" x2="35" y2="30"
                  stroke="black" stroke-width="4"/>

            <circle
                cx="35"
                cy="30"
                r="5"
                fill="white"
                stroke="black"
                stroke-width="3"
            />

            <line x1="39" y1="28" x2="80" y2="15"
                  stroke="black" stroke-width="4"/>

            <circle
                cx="84"
                cy="30"
                r="5"
                fill="white"
                stroke="black"
                stroke-width="3"
            />

            <line x1="89" y1="30" x2="120" y2="30"
                  stroke="black" stroke-width="4"/>
        </svg>
    `,

    fuse: `
        <svg
            class="fuse-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 60"
        >
            <g
                fill="none"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line
                    x1="0"
                    y1="26"
                    x2="36"
                    y2="26"
                    stroke-width="4"
                />

                <rect
                    class="fuse-body"
                    x="36"
                    y="14"
                    width="52"
                    height="24"
                    rx="7"
                    fill="rgba(255,255,255,0.82)"
                    stroke-width="3"
                />

        <path
            class="fuse-link"
            d="M46 25 H56 L62 19 L68 31 L74 19 L80 31 L86 25"
            stroke-width="3"
        />

                <path
                    class="fuse-break-left"
                    d="M48 30 H61 L67 25"
                    stroke-width="3"
                />

                <path
                    class="fuse-break-right"
                    d="M73 35 L79 30 H92"
                    stroke-width="3"
                />

                <circle
                    class="fuse-terminal fuse-terminal-right"
                    cx="90"
                    cy="26"
                    r="4"
                    fill="white"
                    stroke-width="3"
                />
                <circle
                    class="fuse-terminal fuse-terminal-left"
                    cx="38"
                    cy="26"
                    r="4"
                    fill="white"
                    stroke-width="3"
                />
                <line
                    x1="96"
                    y1="26"
                    x2="120"
                    y2="26"
                    stroke-width="4"
                />
            </g>

            <circle
                class="fuse-spark fuse-spark-one"
                cx="67"
                cy="24"
                r="2.2"
                fill="#ff8a00"
            />

            <circle
                class="fuse-spark fuse-spark-two"
                cx="72"
                cy="36"
                r="1.8"
                fill="#ff3b00"
            />
        </svg>
    `,

    motor: `
        <svg
            class="motor-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 70"
        >
            <g
                fill="none"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line x1="0" y1="31" x2="38" y2="31"/>

                <circle
                    cx="63"
                    cy="31"
                    r="28"
                    fill="white"
                />

                <g class="motor-rotor">
                    <line x1="63" y1="11" x2="63" y2="51"/>
                    <line x1="43" y1="31" x2="83" y2="31"/>
                    <line x1="49" y1="17" x2="76" y2="45"/>
                    <line x1="76" y1="17" x2="49" y2="45"/>
                </g>

                <circle
                    cx="63"
                    cy="31"
                    r="4"
                    fill="black"
                />

                <line x1="94" y1="31" x2="130" y2="31"/>
            </g>

            <g
                fill="black"
                font-family="Arial, sans-serif"
                font-weight="bold"
            >
                <text x="12" y="16" font-size="12">+</text>
                <text x="122" y="16" font-size="12">−</text>
            </g>
        </svg>
    `
};

function svgDataURL(svgText) {
    return (
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
            svgText.replace(/\s+/g, " ").trim()
        )
    );
}

const componentLibrary = [
    {
        type: "battery",
        name: "Battery",
        image: svgDataURL(componentSVG.battery),
        conductive: false,
        directional: false,
        defaults: {
            voltage: 12,
            amperage: 5
        }
    },

    {
        type: "resistor",
        name: "Resistor",
        image: svgDataURL(componentSVG.resistor),
        conductive: true,
        directional: false,
        defaults: {
            ohms: 1000,
            maxWatts: 0.25
        }
    },

    {
        type: "diode",
        name: "Diode",
        image: svgDataURL(componentSVG.diode),
        conductive: true,
        directional: true,
        defaults: {
            forwardVoltage: 0.7,
            maxCurrent: 1
        }
    },

    {
        type: "led",
        name: "LED",
        image: svgDataURL(componentSVG.led),
        svg: componentSVG.led,
        conductive: true,
        directional: true,
        defaults: {
            color: "#ff0000",
            forwardVoltage: 2,
            maxCurrent: 0.02
        }
    },

    {
        type: "switch",
        name: "Closed Switch",
        image: svgDataURL(componentSVG.switch),
        conductive: true,
        directional: false,
        defaults: {
            maxCurrent: 10
        }
    },

    {
        type: "fuse",
        name: "Fuse",
        image: svgDataURL(componentSVG.fuse),
        svg: componentSVG.fuse,
        conductive: true,
        directional: false,
        defaults: {
            maxCurrent: 5,
            resistance: 0.02
        }
    },

    {
        type: "motor",
        name: "DC Motor",
        image: svgDataURL(componentSVG.motor),
        svg: componentSVG.motor,
        conductive: true,
        directional: false,
        defaults: {
            voltage: 12,
            resistance: 6,
            maxCurrent: 2
        }
    }
];

/* =========================================================
   ELEMENTS
========================================================= */

const $ = id => document.getElementById(id);

const viewport = $("canvas_viewport");
const canvasTransform = $("canvas_transform");
const canvas = $("wiring_canvas");

const componentLayer = $("component_layer");
const wireLayer = $("finished_wires");
const wirePreview = $("wire_preview");

const componentPreview = $("component_preview");
const componentPreviewImage = $("component_preview_image");

const componentSearch = $("component_search");
const searchResults = $("search_results");

const statusMessage = $("status_message");

const toolDropdownButton = $("tool_dropdown_button");
const toolDropdownLabel = $("tool_dropdown_label");
const toolDropdownMenu = $("tool_dropdown_menu");

const fileDropdownButton = $("file_dropdown_button");
const fileDropdownMenu = $("file_dropdown_menu");
const viewDropdownButton = $("view_dropdown_button");
const viewDropdownMenu = $("view_dropdown_menu");
const simulationDropdownButton = $("simulation_dropdown_button");
const simulationDropdownMenu = $("simulation_dropdown_menu");

const wireColorInput = $("wire_color");
const cancelWireButton = { disabled: true };

const zoomOutButton = $("zoom_out_button");
const zoomInButton = $("zoom_in_button");
const zoomDisplay = $("zoom_display");
const centerViewButton = $("center_view_button");

const runButton = $("run_button");
const stopButton = $("stop_button");
const clearButton = $("clear_button");

const loadFileInput = $("load_file_input");

const faultSummary = $("fault_summary");
const faultList = $("fault_list");

const liveTooltip = $("live_tooltip");

const noSelectionMessage = $("no_selection_message");
const propertyFields = $("property_fields");
const propertyName = $("property_name");

const batteryProperties = $("battery_properties");
const batteryVoltage = $("battery_voltage");
const batteryAmperage = $("battery_amperage");

const resistorProperties = $("resistor_properties");
const resistorOhms = $("resistor_ohms");
const resistorMaxWatts = $("resistor_max_watts");

const diodeProperties = $("diode_properties");
const diodeForwardVoltage = $("diode_forward_voltage");
const diodeMaxCurrent = $("diode_max_current");

const ledProperties = $("led_properties");
const ledColor = $("led_color");
const ledForwardVoltage = $("led_forward_voltage");
const ledMaxCurrent = $("led_max_current");

const fuseProperties = $("fuse_properties");
const fuseMaxCurrent = $("fuse_max_current");

const savePropertiesButton = $("save_properties_button");

/* =========================================================
   APPLICATION STATE
========================================================= */

let mode = "select";
let running = false;
let simulationFaults = [];

let armedComponent = null;
let armedRotation = 0;

let components = [];
let wires = [];

let selectedComponentId = null;

let componentIdCounter = 0;
let wireIdCounter = 0;

let componentCounts = {};

let wireStart = null;
let wireCorners = [];
let mouseGridPosition = {
    x: 0,
    y: 0
};

let draggingComponentId = null;

let zoom = 1;
let panX = 0;
let panY = 0;

let panning = false;

let panStart = {
    mouseX: 0,
    mouseY: 0,
    panX: 0,
    panY: 0
};

/* =========================================================
   GENERAL HELPERS
========================================================= */

function clamp(value, minimum, maximum) {
    return Math.max(
        minimum,
        Math.min(maximum, value)
    );
}

function snap(value) {
    return Math.round(value / GRID) * GRID;
}

function copy(value) {
    return JSON.parse(JSON.stringify(value));
}

function setStatus(message) {
    statusMessage.textContent = message;
}

function samePoint(pointA, pointB) {
    return (
        pointA.x === pointB.x &&
        pointA.y === pointB.y
    );
}

function addPoint(points, point) {
    const newPoint = {
        x: snap(point.x),
        y: snap(point.y)
    };

    const previousPoint =
        points[points.length - 1];

    if (
        !previousPoint ||
        !samePoint(previousPoint, newPoint)
    ) {
        points.push(newPoint);
    }
}

function simplifyRoute(points) {
    if (points.length < 3) {
        return points;
    }

    const result = [points[0]];

    for (
        let index = 1;
        index < points.length - 1;
        index++
    ) {
        const previous = points[index - 1];
        const current = points[index];
        const next = points[index + 1];

        const sameVerticalLine =
            previous.x === current.x &&
            current.x === next.x;

        const sameHorizontalLine =
            previous.y === current.y &&
            current.y === next.y;

        if (
            !sameVerticalLine &&
            !sameHorizontalLine
        ) {
            result.push(current);
        }
    }

    result.push(points[points.length - 1]);

    return result;
}

function getComponent(componentId) {
    return (
        components.find(
            component =>
                component.id === componentId
        ) || null
    );
}

function getWire(wireId) {
    return (
        wires.find(
            wire => wire.id === wireId
        ) || null
    );
}

function nodeKey(componentId, side) {
    return `${componentId}:${side}`;
}

function closeMenus() {
    toolDropdownMenu.classList.remove("open");
    fileDropdownMenu.classList.remove("open");
    viewDropdownMenu.classList.remove("open");
    simulationDropdownMenu.classList.remove("open");
}

/* =========================================================
   VIEW AND ZOOM
========================================================= */

function updateView() {
    canvasTransform.style.transform =
        `translate(${panX}px, ${panY}px) scale(${zoom})`;

    zoomDisplay.textContent =
        `${Math.round(zoom * 100)}%`;
}

function centerGrid() {
    const bounds =
        viewport.getBoundingClientRect();

    panX =
        bounds.width / 2 -
        CANVAS_WIDTH * zoom / 2;

    panY =
        bounds.height / 2 -
        CANVAS_HEIGHT * zoom / 2;

    updateView();
}

function setZoom(newZoom, clientX, clientY) {
    const bounds =
        viewport.getBoundingClientRect();

    const pointerX =
        clientX - bounds.left;

    const pointerY =
        clientY - bounds.top;

    const canvasX =
        (pointerX - panX) / zoom;

    const canvasY =
        (pointerY - panY) / zoom;

    zoom = clamp(newZoom, 0.2, 3);

    panX =
        pointerX - canvasX * zoom;

    panY =
        pointerY - canvasY * zoom;

    updateView();
}

function canvasPosition(event) {
    const bounds =
        viewport.getBoundingClientRect();

    return {
        x:
            (
                event.clientX -
                bounds.left -
                panX
            ) / zoom,

        y:
            (
                event.clientY -
                bounds.top -
                panY
            ) / zoom
    };
}

function gridPosition(event) {
    const position =
        canvasPosition(event);

    return {
        x: clamp(
            snap(position.x),
            0,
            CANVAS_WIDTH
        ),

        y: clamp(
            snap(position.y),
            0,
            CANVAS_HEIGHT
        )
    };
}

/* =========================================================
   SEARCH
========================================================= */

function renderSearch(text = "") {
    const query =
        text.trim().toLowerCase();

    searchResults.innerHTML = "";

    const matches =
        componentLibrary.filter(definition => {
            return (
                !query ||
                definition.name
                    .toLowerCase()
                    .includes(query) ||
                definition.type
                    .toLowerCase()
                    .includes(query)
            );
        });

    for (const definition of matches) {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "search-result";

        const imageBox =
            document.createElement("div");

        imageBox.className =
            "search-symbol-box";

        const image =
            document.createElement("img");

        image.src = definition.image;
        image.alt = definition.name;

        const name =
            document.createElement("span");

        name.textContent = definition.name;

        imageBox.append(image);
        button.append(imageBox, name);

        button.addEventListener("click", () => {
            armComponent(definition);
        });

        searchResults.append(button);
    }

    searchResults.style.display =
        matches.length > 0
            ? "block"
            : "none";
}

function armComponent(definition) {
    if (running) {
        return;
    }

    cancelWire();

    armedComponent = definition;
    armedRotation = 0;

    mode = "place";

    componentPreviewImage.src =
        definition.image;

    componentPreview.style.transform =
        "translate(-50%, -50%) rotate(0deg)";

    componentSearch.value = "";
    searchResults.style.display = "none";

    setStatus(
        `${definition.name} selected. ` +
        "Press R to rotate before placement."
    );
}

/* =========================================================
   TOOL MODE
========================================================= */
function applyLEDColor(component, color) {
    if (!component || component.type !== "led") {
        return;
    }

    component.properties.color = color;

    component.element.style.setProperty(
        "--led-glow",
        color
    );

    component.element.style.setProperty(
        "--led-glow-strength",
        "0"
    );

    component.element.classList.remove(
        "led-powered"
    );

    component.element.classList.add(
        "led-off"
    );

    const image =
        component.element.querySelector(
            ".component-body img"
        );

    if (image) {
        image.style.opacity = "1";
        image.style.filter = "none";
    }
}
function setMode(newMode) {
    if (running) {
        return;
    }

    if (newMode === "rotate") {
        rotateSelected();
        return;
    }

    if (newMode === "fault") {
        toggleFault();
        return;
    }

    if (newMode === "cancel") {
        cancelCurrentAction();
        return;
    }

    mode = newMode;

    armedComponent = null;
    componentPreview.style.display = "none";

    if (newMode !== "wire") {
        cancelWire();
    }

    const modeName =
        newMode.charAt(0).toUpperCase() +
        newMode.slice(1);

    toolDropdownLabel.textContent =
        `Tool: ${modeName}`;

    if (newMode === "wire") {
        setStatus(
            "Wire mode: click a terminal, " +
            "click grid locations for corners, " +
            "then click another terminal."
        );
    } else if (newMode === "delete") {
        setStatus(
            "Delete mode: click a wire or component."
        );
    } else {
        setStatus(
            "Select mode: drag components or edit properties."
        );
    }
}

/* =========================================================
   COMPONENT CREATION
========================================================= */
function componentConnectedWireCount(componentId) {
    return wires.filter(wire => {
        return (
            wire.startComponentId === componentId ||
            wire.endComponentId === componentId
        );
    }).length;
}
function nextComponentNumber(type) {
    componentCounts[type] =
        (componentCounts[type] || 0) + 1;

    return componentCounts[type];
}

function createTerminal(componentId, side) {
    const terminal =
        document.createElement("button");

    terminal.type = "button";

    terminal.className =
        `terminal terminal-${side}`;

    terminal.dataset.componentId =
        componentId;

    terminal.dataset.side = side;

    terminal.addEventListener(
        "mousedown",
        event => {
            event.stopPropagation();
        }
    );

    terminal.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (running) {
                return;
            }

            if (mode === "wire") {
                terminalClicked(
                    componentId,
                    side,
                    terminal
                );
            } else if (mode === "delete") {
                deleteComponent(componentId);
            }
        }
    );

    return terminal;
}

function placeComponent(
    definition,
    x,
    y,
    options = {}
) {
    componentIdCounter += 1;

    const id =
        `component-${componentIdCounter}`;

    const typeNumber =
        options.typeNumber ??
        nextComponentNumber(definition.type);

    componentCounts[definition.type] =
        Math.max(
            componentCounts[definition.type] || 0,
            typeNumber
        );

    const rotation =
        options.rotation ?? armedRotation;

    const displayName =
        options.displayName ??
        `${definition.name} ${typeNumber}`;

    const element =
        document.createElement("div");

    element.className =
        "placed-component";

    element.dataset.componentId = id;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    const rotationElement =
        document.createElement("div");

    rotationElement.className =
        "component-rotation";

    rotationElement.style.transform =
        `rotate(${rotation}deg)`;

    const body =
        document.createElement("div");

    body.className = "component-body";

    if (definition.svg) {
        body.style.width = "112px";
        body.style.height = "58px";
        body.style.overflow = "visible";
    }

    let image;

    if (definition.svg) {
        image =
            document.createElement("div");

        image.className =
            "component-inline-svg";

        /*
         * Size the inline SVG directly so the motor appears
         * even if motor.css has not loaded yet.
         */
        image.style.display = "block";
        image.style.width = "112px";
        image.style.height = "58px";
        image.style.pointerEvents = "none";

        image.innerHTML =
            definition.svg;

        const inlineSVG =
            image.querySelector("svg");

        if (inlineSVG) {
            inlineSVG.style.display = "block";
            inlineSVG.style.width = "100%";
            inlineSVG.style.height = "100%";
            inlineSVG.style.overflow = "visible";
        }
    } else {
        image =
            document.createElement("img");

        image.src = definition.image;
        image.alt = displayName;
    }

    const label =
        document.createElement("div");

    label.className =
        "component-label";

    label.textContent = displayName;

    const leftTerminal =
        createTerminal(id, "left");

    const rightTerminal =
        createTerminal(id, "right");

    body.append(image);

    rotationElement.append(
        body,
        leftTerminal,
        rightTerminal
    );

    element.append(
        rotationElement,
        label
    );

    componentLayer.append(element);

    const component = {
        id,
        type: definition.type,
        typeNumber,
        name: definition.name,
        displayName,
        image: definition.image,
        svg: definition.svg || null,

        conductive: definition.conductive,
        directional: definition.directional,

        rotation,
        x,
        y,

        faulty:
            options.faulty ?? false,

        destroyed:
            options.destroyed ?? false,

        properties:
            copy(
                options.properties ??
                definition.defaults
            ),

        live: {
            powered: false,
            voltage: 0,
            current: 0,
            watts: 0,
            voltageDrop: 0,
            status: "Stopped"
        },

        element,
        rotationElement,
        labelElement: label,

        motorAnimation: null
    };

    components.push(component);

    if (component.faulty) {
        element.classList.add("faulty");
    }

    if (component.destroyed) {
        element.classList.add("destroyed");
    }

    if (component.type === "led") {
        element.classList.add("led-off");
    }
    if (component.type === "led") {
    applyLEDColor(
        component,
        component.properties.color ||
        "#ff0000"
    );
}

    addComponentEvents(component);
    addTooltipEvents(component);

    clearSelection();

    return component;
}

function addComponentEvents(component) {
    component.element.addEventListener(
        "mousedown",
        event => {
            if (
                event.button !== 0 ||
                event.target.classList.contains("terminal") ||
                running
            ) {
                return;
            }

            if (mode === "delete") {
                deleteComponent(component.id);
                return;
            }

            if (mode !== "select") {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            selectComponent(component.id);

            draggingComponentId =
                component.id;

            component.element.classList.add(
                "dragging"
            );

            connectedWireClass(
                component.id,
                "dragging",
                true
            );
        }
    );
}

/* =========================================================
   SELECTION AND PROPERTIES
========================================================= */

function selectComponent(componentId) {
    selectedComponentId = componentId;

    for (const component of components) {
        component.element.classList.toggle(
            "selected",
            component.id === componentId
        );
    }

    const component =
        getComponent(componentId);

    if (component) {
        loadProperties(component);
    }
}

function clearSelection() {
    selectedComponentId = null;

    for (const component of components) {
        component.element.classList.remove(
            "selected"
        );
    }

    propertyFields.hidden = true;
    noSelectionMessage.hidden = false;
}

function loadProperties(component) {
    noSelectionMessage.hidden = true;
    propertyFields.hidden = false;

    batteryProperties.hidden = true;
    resistorProperties.hidden = true;
    diodeProperties.hidden = true;
    ledProperties.hidden = true;
    fuseProperties.hidden = true;

    propertyName.value =
        component.displayName;

    if (component.type === "battery") {
        batteryProperties.hidden = false;

        batteryVoltage.value =
            component.properties.voltage;

        batteryAmperage.value =
            component.properties.amperage;
    }

    if (component.type === "resistor") {
        resistorProperties.hidden = false;

        resistorOhms.value =
            component.properties.ohms;

        resistorMaxWatts.value =
            component.properties.maxWatts;
    }

    if (component.type === "diode") {
        diodeProperties.hidden = false;

        diodeForwardVoltage.value =
            component.properties.forwardVoltage;

        diodeMaxCurrent.value =
            component.properties.maxCurrent;
    }

    if (component.type === "led") {
        ledProperties.hidden = false;

        ledColor.value =
            component.properties.color;

        ledForwardVoltage.value =
            component.properties.forwardVoltage;

        ledMaxCurrent.value =
            component.properties.maxCurrent;
    }

    if (component.type === "fuse") {
        fuseProperties.hidden = false;

        fuseMaxCurrent.value =
            component.properties.maxCurrent;
    }
}

function saveProperties() {
    const component =
        getComponent(selectedComponentId);

    if (!component || running) {
        return;
    }

    const newName =
        propertyName.value.trim();

    if (newName) {
        component.displayName = newName;
    }

    component.labelElement.textContent =
        component.displayName;

    if (component.type === "battery") {
        component.properties.voltage =
            Number(batteryVoltage.value) || 0;

        component.properties.amperage =
            Number(batteryAmperage.value) || 0;
    }

    if (component.type === "resistor") {
        component.properties.ohms =
            Number(resistorOhms.value) || 0;

        component.properties.maxWatts =
            Number(resistorMaxWatts.value) || 0;
    }

    if (component.type === "diode") {
        component.properties.forwardVoltage =
            Number(diodeForwardVoltage.value) || 0;

        component.properties.maxCurrent =
            Number(diodeMaxCurrent.value) || 0;
    }

if (component.type === "led") {
    applyLEDColor(
        component,
        ledColor.value
    );

    component.properties.forwardVoltage =
        Number(ledForwardVoltage.value) || 0;

    component.properties.maxCurrent =
        Number(ledMaxCurrent.value) || 0;
}

    if (component.type === "fuse") {
        component.properties.maxCurrent =
            Math.max(
                0.001,
                Number(fuseMaxCurrent.value) || 5
            );
    }


    setStatus(
        `${component.displayName} properties saved.`
    );
}

/* =========================================================
   COMPONENT ROTATION AND TERMINAL POSITIONS
========================================================= */

function rotatePoint(x, y, degrees) {
    const radians =
        degrees * Math.PI / 180;

    return {
        x:
            x * Math.cos(radians) -
            y * Math.sin(radians),

        y:
            x * Math.sin(radians) +
            y * Math.cos(radians)
    };
}

function terminalPosition(component, side) {
    const localX =
        side === "left"
            ? -TERMINAL_DISTANCE
            : TERMINAL_DISTANCE;

    const rotated =
        rotatePoint(
            localX,
            0,
            component.rotation
        );

    return {
        x: snap(component.x + rotated.x),
        y: snap(component.y + rotated.y)
    };
}

function disconnectComponentWires(componentId) {
    const component =
        getComponent(componentId);

    if (!component) {
        return 0;
    }

    let disconnectedCount = 0;

    for (const wire of wires) {
        let changed = false;

        if (
            wire.startComponentId === componentId
        ) {
            const loosePosition =
                terminalPosition(
                    component,
                    wire.startSide
                );

            wire.startComponentId = null;
            wire.startSide = null;
            wire.startPoint =
                copy(loosePosition);

            changed = true;
            disconnectedCount += 1;
        }

        if (
            wire.endComponentId === componentId
        ) {
            const loosePosition =
                terminalPosition(
                    component,
                    wire.endSide
                );

            wire.endComponentId = null;
            wire.endSide = null;
            wire.endPoint =
                copy(loosePosition);

            changed = true;
            disconnectedCount += 1;
        }

        if (changed) {
            rebuildWire(wire);
        }
    }

    return disconnectedCount;
}
function rotateSelected() {
    if (running) {
        return;
    }

    if (
        mode === "place" &&
        armedComponent
    ) {
        armedRotation =
            (armedRotation + 90) % 360;

        componentPreview.style.transform =
            `translate(-50%, -50%) ` +
            `rotate(${armedRotation}deg)`;

        return;
    }

    const component =
        getComponent(selectedComponentId);

    if (!component) {
        setStatus(
            "Select a component before rotating it."
        );

        return;
    }

    /*
     * Disconnect at the old physical terminal positions.
     * This leaves every wire exactly where it was.
     */
    const disconnectedCount =
        disconnectComponentWires(
            component.id
        );

    component.rotation =
        (component.rotation + 90) % 360;

    component.rotationElement.style.transform =
        `rotate(${component.rotation}deg)`;

    /*
     * Reconnect only when a newly rotated terminal lands
     * exactly on an existing loose wire endpoint.
     *
     * A 180-degree flip swaps the logical left and right
     * terminals while preserving the physical wire positions.
     */
    const reconnectedCount =
        reconnectMatchingLooseEnds(
            component
        );

    resetSimulation();

    if (
        disconnectedCount > 0 &&
        reconnectedCount === disconnectedCount
    ) {
        setStatus(
            `${component.displayName} rotated and wires reconnected.`
        );
    } else if (disconnectedCount > 0) {
        setStatus(
            `${component.displayName} rotated. ` +
            `${reconnectedCount} of ` +
            `${disconnectedCount} wire ends reconnected.`
        );
    } else {
        setStatus(
            `${component.displayName} rotated.`
        );
    }
}

function toggleFault() {
    const component =
        getComponent(selectedComponentId);

    if (!component || running) {
        return;
    }

    component.faulty =
        !component.faulty;

    component.element.classList.toggle(
        "faulty",
        component.faulty
    );

    setStatus(
        component.faulty
            ? `${component.displayName} marked faulty.`
            : `${component.displayName} fault removed.`
    );
}

/* =========================================================
   ORTHOGONAL WIRE ROUTING
========================================================= */

function endpointPosition(
    componentId,
    side,
    loosePoint
) {
    if (componentId) {
        const component =
            getComponent(componentId);

        if (component) {
            return terminalPosition(
                component,
                side
            );
        }
    }

    return {
        x: snap(loosePoint.x),
        y: snap(loosePoint.y)
    };
}

function addOrthogonalConnection(
    route,
    destination
) {
    const previous =
        route[route.length - 1];

    const target = {
        x: snap(destination.x),
        y: snap(destination.y)
    };

    if (!previous) {
        route.push(target);
        return;
    }

    if (
        previous.x === target.x ||
        previous.y === target.y
    ) {
        addPoint(route, target);
        return;
    }

    /*
     * Every wire corner is forced onto the grid.
     * Diagonal segments are never created.
     */
    const horizontalFirst = {
        x: target.x,
        y: previous.y
    };

    addPoint(route, horizontalFirst);
    addPoint(route, target);
}

function buildOrthogonalRoute(
    start,
    corners,
    end
) {
    const route = [];

    addPoint(route, start);

    for (const corner of corners) {
        addOrthogonalConnection(
            route,
            corner
        );
    }

    addOrthogonalConnection(
        route,
        end
    );

    return simplifyRoute(route);
}

/* =========================================================
   WIRES
========================================================= */

function createWireElements(wire) {
    const group =
        document.createElementNS(
            SVG_NS,
            "g"
        );

    group.classList.add("wire-group");
    group.dataset.wireId = wire.id;

    const base =
        document.createElementNS(
            SVG_NS,
            "polyline"
        );

    base.classList.add("wire-base");
    base.setAttribute(
        "stroke",
        wire.color
    );

    const flow =
        document.createElementNS(
            SVG_NS,
            "polyline"
        );

    flow.classList.add("wire-flow");

    group.append(base, flow);
    wireLayer.append(group);

    wire.groupElement = group;
    wire.baseElement = base;
    wire.flowElement = flow;

    group.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (
                mode === "delete" &&
                !running
            ) {
                deleteWire(wire.id);
            }
        }
    );

    group.addEventListener(
        "mouseenter",
        () => {
            if (mode === "delete") {
                group.classList.add(
                    "delete-hover"
                );
            }
        }
    );

    group.addEventListener(
        "mouseleave",
        () => {
            group.classList.remove(
                "delete-hover"
            );
        }
    );
}

function createWireBetween(
    startEndpoint,
    endEndpoint,
    color,
    route
) {
    wireIdCounter += 1;

    const wire = {
        id: `wire-${wireIdCounter}`,

        startComponentId:
            startEndpoint.componentId || null,

        startSide:
            startEndpoint.side || null,

        startPoint:
            startEndpoint.componentId
                ? null
                : copy(startEndpoint.point),

        endComponentId:
            endEndpoint.componentId || null,

        endSide:
            endEndpoint.side || null,

        endPoint:
            endEndpoint.componentId
                ? null
                : copy(endEndpoint.point),

        color,

        fixedRoute:
            simplifyRoute(
                route.map(point => ({
                    x: snap(point.x),
                    y: snap(point.y)
                }))
            ),

        route: [],

        groupElement: null,
        baseElement: null,
        flowElement: null,

        live: {
            powered: false,
            current: 0
        }
    };

    wires.push(wire);

    createWireElements(wire);
    rebuildWire(wire);

    return wire;
}

function createConnectedWire(
    startComponentId,
    startSide,
    endComponentId,
    endSide,
    color,
    route
) {
    return createWireBetween(
        {
            componentId: startComponentId,
            side: startSide,
            point: null
        },

        {
            componentId: endComponentId,
            side: endSide,
            point: null
        },

        color,
        route
    );
}

function rebuildWire(wire) {
    if (!wire) {
        return;
    }

    let startPosition = null;
    let endPosition = null;

    if (wire.startComponentId) {
        const startComponent =
            getComponent(wire.startComponentId);

        if (!startComponent) {
            return;
        }

        startPosition =
            terminalPosition(
                startComponent,
                wire.startSide
            );
    } else if (wire.startPoint) {
        startPosition = {
            x: snap(wire.startPoint.x),
            y: snap(wire.startPoint.y)
        };
    }

    if (wire.endComponentId) {
        const endComponent =
            getComponent(wire.endComponentId);

        if (!endComponent) {
            return;
        }

        endPosition =
            terminalPosition(
                endComponent,
                wire.endSide
            );
    } else if (wire.endPoint) {
        endPosition = {
            x: snap(wire.endPoint.x),
            y: snap(wire.endPoint.y)
        };
    }

    if (!startPosition || !endPosition) {
        return;
    }

    const savedMiddlePoints =
        Array.isArray(wire.fixedRoute)
            ? wire.fixedRoute.slice(1, -1)
            : [];

    wire.route =
        buildOrthogonalRoute(
            startPosition,
            savedMiddlePoints,
            endPosition
        );

    /*
     * Keep the saved route synchronized with the
     * visible route. This prevents the next simulation
     * from using stale coordinates after rotation.
     */
    wire.fixedRoute =
        copy(wire.route);

    if (!wire.startComponentId) {
        wire.startPoint =
            copy(wire.route[0]);
    }

    if (!wire.endComponentId) {
        wire.endPoint =
            copy(
                wire.route[
                    wire.route.length - 1
                ]
            );
    }

    const pointText =
        wire.route
            .map(point => {
                return `${point.x},${point.y}`;
            })
            .join(" ");

    wire.baseElement.setAttribute(
        "points",
        pointText
    );

    wire.flowElement.setAttribute(
        "points",
        pointText
    );
}

function rebuildConnectedWires(componentId) {
    for (const wire of wires) {
        if (
            wire.startComponentId === componentId ||
            wire.endComponentId === componentId
        ) {
            rebuildWire(wire);
        }
    }
}

function connectedWireClass(
    componentId,
    className,
    enabled
) {
    for (const wire of wires) {
        if (
            wire.startComponentId === componentId ||
            wire.endComponentId === componentId
        ) {
            wire.groupElement.classList.toggle(
                className,
                enabled
            );
        }
    }
}

function terminalConnected(
    componentId,
    side
) {
    return wires.some(wire => {
        return (
            (
                wire.startComponentId === componentId &&
                wire.startSide === side
            ) ||
            (
                wire.endComponentId === componentId &&
                wire.endSide === side
            )
        );
    });
}

/* =========================================================
   MANUAL WIRE PLACEMENT
========================================================= */

function terminalClicked(
    componentId,
    side,
    terminalElement
) {
    if (!wireStart) {
        wireStart = {
            componentId,
            side,
            element: terminalElement
        };

        wireCorners = [];

        terminalElement.classList.add(
            "wire-start"
        );

        cancelWireButton.disabled = false;

        updateWirePreview();

        setStatus(
            "Wire started. Click the grid to add corners, " +
            "then click another terminal."
        );

        return;
    }

    if (
        wireStart.componentId === componentId &&
        wireStart.side === side
    ) {
        cancelWire();

        setStatus(
            "Wire placement cancelled."
        );

        return;
    }

    const startComponent =
        getComponent(wireStart.componentId);

    const endComponent =
        getComponent(componentId);

    if (!startComponent || !endComponent) {
        cancelWire();
        return;
    }

    const startPosition =
        terminalPosition(
            startComponent,
            wireStart.side
        );

    const endPosition =
        terminalPosition(
            endComponent,
            side
        );

    const route =
        buildOrthogonalRoute(
            startPosition,
            wireCorners,
            endPosition
        );

    createConnectedWire(
        wireStart.componentId,
        wireStart.side,
        componentId,
        side,
        wireColorInput.value,
        route
    );

    cancelWire();

    setStatus("Wire created.");
}

function addWireCorner(point) {
    if (!wireStart) {
        return;
    }

    const previous =
        wireCorners.length > 0
            ? wireCorners[
                wireCorners.length - 1
            ]
            : terminalPosition(
                getComponent(
                    wireStart.componentId
                ),
                wireStart.side
            );

    const corner = {
        x: snap(point.x),
        y: snap(point.y)
    };

    /*
     * Corners are corrected so they always continue
     * horizontally or vertically.
     */
    const deltaX =
        Math.abs(corner.x - previous.x);

    const deltaY =
        Math.abs(corner.y - previous.y);

    if (deltaX >= deltaY) {
        corner.y = previous.y;
    } else {
        corner.x = previous.x;
    }

    addPoint(wireCorners, corner);

    updateWirePreview();
}

function updateWirePreview() {
    if (!wireStart) {
        wirePreview.setAttribute(
            "points",
            ""
        );

        return;
    }

    const component =
        getComponent(
            wireStart.componentId
        );

    if (!component) {
        cancelWire();
        return;
    }

    const start =
        terminalPosition(
            component,
            wireStart.side
        );

    const route =
        buildOrthogonalRoute(
            start,
            wireCorners,
            mouseGridPosition
        );

    const pointText =
        route
            .map(point => {
                return `${point.x},${point.y}`;
            })
            .join(" ");

    wirePreview.setAttribute(
        "points",
        pointText
    );

    wirePreview.setAttribute(
        "stroke",
        wireColorInput.value
    );
}

function cancelWire() {
    if (wireStart?.element) {
        wireStart.element.classList.remove(
            "wire-start"
        );
    }

    wireStart = null;
    wireCorners = [];

    wirePreview.setAttribute(
        "points",
        ""
    );

    cancelWireButton.disabled = true;
}

function cancelCurrentAction() {
    const hadWire = Boolean(wireStart);
    const hadComponent = Boolean(armedComponent);

    cancelWire();
    armedComponent = null;
    armedRotation = 0;
    componentPreview.style.display = "none";

    if (!running) {
        mode = "select";
        toolDropdownLabel.textContent = "Tool: Select";
    }

    setStatus(
        hadWire
            ? "Wire placement cancelled."
            : hadComponent
                ? "Component placement cancelled."
                : "Current action cancelled."
    );
}

/* =========================================================
   DELETE
========================================================= */

function deleteWire(wireId) {
    const wire = getWire(wireId);

    if (!wire) {
        return;
    }

    wire.groupElement.remove();

    wires = wires.filter(
        currentWire =>
            currentWire.id !== wireId
    );

    setStatus("Wire deleted.");
}

function deleteComponent(componentId) {
    const component =
        getComponent(componentId);

    if (!component || running) {
        return;
    }

    const connectedWireIds =
        wires
            .filter(wire => {
                return (
                    wire.startComponentId === componentId ||
                    wire.endComponentId === componentId
                );
            })
            .map(wire => wire.id);

    for (const wireId of connectedWireIds) {
        deleteWire(wireId);
    }

    component.element.remove();

    components = components.filter(
        currentComponent =>
            currentComponent.id !== componentId
    );

    if (selectedComponentId === componentId) {
        clearSelection();
    }

    setStatus(
        `${component.displayName} deleted.`
    );
}

/* =========================================================
   AUTOMATIC CONNECTION
========================================================= */

function distance(pointA, pointB) {
    return Math.hypot(
        pointB.x - pointA.x,
        pointB.y - pointA.y
    );
}

function nearestPointOnSegment(
    point,
    segmentStart,
    segmentEnd
) {
    const deltaX =
        segmentEnd.x - segmentStart.x;

    const deltaY =
        segmentEnd.y - segmentStart.y;

    const lengthSquared =
        deltaX * deltaX +
        deltaY * deltaY;

    if (lengthSquared === 0) {
        return {
            point: copy(segmentStart),
            distance:
                distance(point, segmentStart)
        };
    }

    let ratio =
        (
            (
                point.x - segmentStart.x
            ) * deltaX +
            (
                point.y - segmentStart.y
            ) * deltaY
        ) / lengthSquared;

    ratio = clamp(ratio, 0, 1);

    const nearest = {
        x:
            segmentStart.x +
            deltaX * ratio,

        y:
            segmentStart.y +
            deltaY * ratio
    };

    return {
        point: nearest,
        distance:
            distance(point, nearest)
    };
}

function nearestWireSegmentForComponent(component) {
    const tolerance = GRID * 2;
    const requiredLength = COMPONENT_WIDTH + GRID;

    let bestMatch = null;

    for (const wire of wires) {
        if (!Array.isArray(wire.route) || wire.route.length < 2) {
            continue;
        }

        /*
         * Never insert into a wire already connected
         * to the component being dropped.
         */
        if (
            wire.startComponentId === component.id ||
            wire.endComponentId === component.id
        ) {
            continue;
        }

        for (
            let segmentIndex = 0;
            segmentIndex < wire.route.length - 1;
            segmentIndex++
        ) {
            const start = wire.route[segmentIndex];
            const end = wire.route[segmentIndex + 1];

            const horizontal = start.y === end.y;
            const vertical = start.x === end.x;

            if (!horizontal && !vertical) {
                continue;
            }

            const segmentLength = distance(start, end);

            /*
             * The segment must have enough space for the
             * complete component and both terminals.
             */
            if (segmentLength < requiredLength) {
                continue;
            }

            let center;
            let dropDistance;

            if (horizontal) {
                const minimumX =
                    Math.min(start.x, end.x) +
                    TERMINAL_DISTANCE;

                const maximumX =
                    Math.max(start.x, end.x) -
                    TERMINAL_DISTANCE;

                if (minimumX > maximumX) {
                    continue;
                }

                center = {
                    x: snap(
                        clamp(
                            component.x,
                            minimumX,
                            maximumX
                        )
                    ),
                    y: start.y
                };

                dropDistance =
                    Math.abs(component.y - start.y);
            } else {
                const minimumY =
                    Math.min(start.y, end.y) +
                    TERMINAL_DISTANCE;

                const maximumY =
                    Math.max(start.y, end.y) -
                    TERMINAL_DISTANCE;

                if (minimumY > maximumY) {
                    continue;
                }

                center = {
                    x: start.x,
                    y: snap(
                        clamp(
                            component.y,
                            minimumY,
                            maximumY
                        )
                    )
                };

                dropDistance =
                    Math.abs(component.x - start.x);
            }

            if (dropDistance > tolerance) {
                continue;
            }

            if (
                !bestMatch ||
                dropDistance < bestMatch.dropDistance
            ) {
                bestMatch = {
                    wire,
                    segmentIndex,
                    segmentStart: copy(start),
                    segmentEnd: copy(end),
                    center,
                    horizontal,
                    vertical,
                    dropDistance
                };
            }
        }
    }

    return bestMatch;
}
function splitRoute(
    route,
    segmentIndex,
    splitPoint
) {
    const first = [];
    const second = [];

    for (
        let index = 0;
        index <= segmentIndex;
        index++
    ) {
        first.push(copy(route[index]));
    }

    addPoint(first, splitPoint);
    addPoint(second, splitPoint);

    for (
        let index = segmentIndex + 1;
        index < route.length;
        index++
    ) {
        second.push(copy(route[index]));
    }

    return {
        first: simplifyRoute(first),
        second: simplifyRoute(second)
    };
}
function copyWireEndpoint(wire, endpoint) {
    if (endpoint === "start") {
        return {
            componentId: wire.startComponentId,
            side: wire.startSide,
            point: wire.startComponentId
                ? null
                : copy(
                    wire.startPoint ||
                    wire.route[0]
                )
        };
    }

    return {
        componentId: wire.endComponentId,
        side: wire.endSide,
        point: wire.endComponentId
            ? null
            : copy(
                wire.endPoint ||
                wire.route[
                    wire.route.length - 1
                ]
            )
    };
}
function connectComponentToWire(component, match) {
    if (!component || !match?.wire) {
        return false;
    }

    /*
     * Only loose components can be inserted into an
     * existing wire. This prevents their existing wires
     * from being dragged into the insertion operation.
     */
    if (componentConnectedWireCount(component.id) > 0) {
        return false;
    }

    const originalWire = match.wire;

    const originalRoute =
        copy(originalWire.route);

    if (originalRoute.length < 2) {
        return false;
    }

    const originalColor =
        originalWire.color;

    const originalStartEndpoint =
        copyWireEndpoint(
            originalWire,
            "start"
        );

    const originalEndEndpoint =
        copyWireEndpoint(
            originalWire,
            "end"
        );

    /*
     * Snap and rotate the component onto the wire.
     */
    component.rotation =
        match.vertical ? 90 : 0;

    component.x =
        match.center.x;

    component.y =
        match.center.y;

    component.rotationElement.style.transform =
        `rotate(${component.rotation}deg)`;

    component.element.style.left =
        `${component.x}px`;

    component.element.style.top =
        `${component.y}px`;

    const leftTerminal =
        terminalPosition(
            component,
            "left"
        );

    const rightTerminal =
        terminalPosition(
            component,
            "right"
        );

    /*
     * The original wire may run left-to-right,
     * right-to-left, top-to-bottom, or bottom-to-top.
     *
     * Determine which terminal is closest to the
     * beginning of the original segment.
     */
    const leftDistanceFromStart =
        distance(
            leftTerminal,
            match.segmentStart
        );

    const rightDistanceFromStart =
        distance(
            rightTerminal,
            match.segmentStart
        );

    const terminalNearStart =
        leftDistanceFromStart <=
        rightDistanceFromStart
            ? {
                point: leftTerminal,
                side: "left"
            }
            : {
                point: rightTerminal,
                side: "right"
            };

    const terminalNearEnd =
        terminalNearStart.side === "left"
            ? {
                point: rightTerminal,
                side: "right"
            }
            : {
                point: leftTerminal,
                side: "left"
            };

    /*
     * First replacement wire:
     * original wire start -> first component terminal.
     */
    const firstRoute = [];

    for (
        let index = 0;
        index <= match.segmentIndex;
        index++
    ) {
        addPoint(
            firstRoute,
            originalRoute[index]
        );
    }

    addOrthogonalConnection(
        firstRoute,
        terminalNearStart.point
    );

    /*
     * Second replacement wire:
     * second component terminal -> original wire end.
     */
    const secondRoute = [
        copy(terminalNearEnd.point)
    ];

    for (
        let index = match.segmentIndex + 1;
        index < originalRoute.length;
        index++
    ) {
        addOrthogonalConnection(
            secondRoute,
            originalRoute[index]
        );
    }

    const firstRouteFinal =
        simplifyRoute(firstRoute);

    const secondRouteFinal =
        simplifyRoute(secondRoute);

    if (
        firstRouteFinal.length < 2 ||
        secondRouteFinal.length < 2
    ) {
        return false;
    }

    /*
     * Delete the original wire before creating either
     * replacement. This makes the insertion atomic from
     * the diagram's point of view.
     */
    deleteWire(originalWire.id);

    const firstReplacementWire =
        createWireBetween(
            originalStartEndpoint,

            {
                componentId: component.id,
                side: terminalNearStart.side,
                point: null
            },

            originalColor,
            firstRouteFinal
        );

    const secondReplacementWire =
        createWireBetween(
            {
                componentId: component.id,
                side: terminalNearEnd.side,
                point: null
            },

            originalEndEndpoint,

            originalColor,
            secondRouteFinal
        );

    rebuildWire(firstReplacementWire);
    rebuildWire(secondReplacementWire);

    selectComponent(component.id);

    setStatus(
        `${component.displayName} inserted into wire.`
    );

    return true;
}
function connectLooseWireEnds(component) {
    let connectionCount = 0;

    for (const side of ["left", "right"]) {
        if (
            terminalConnected(
                component.id,
                side
            )
        ) {
            continue;
        }

        const terminal =
            terminalPosition(
                component,
                side
            );

        let bestMatch = null;

        for (const wire of wires) {
            if (!wire.startComponentId) {
                const looseStart =
                    wire.startPoint ||
                    wire.route[0];

                const currentDistance =
                    distance(
                        terminal,
                        looseStart
                    );

                if (
                    currentDistance <=
                    AUTO_CONNECT_DISTANCE &&
                    (
                        !bestMatch ||
                        currentDistance <
                        bestMatch.distance
                    )
                ) {
                    bestMatch = {
                        wire,
                        endpoint: "start",
                        distance: currentDistance
                    };
                }
            }

            if (!wire.endComponentId) {
                const looseEnd =
                    wire.endPoint ||
                    wire.route[
                        wire.route.length - 1
                    ];

                const currentDistance =
                    distance(
                        terminal,
                        looseEnd
                    );

                if (
                    currentDistance <=
                    AUTO_CONNECT_DISTANCE &&
                    (
                        !bestMatch ||
                        currentDistance <
                        bestMatch.distance
                    )
                ) {
                    bestMatch = {
                        wire,
                        endpoint: "end",
                        distance: currentDistance
                    };
                }
            }
        }

        if (!bestMatch) {
            continue;
        }

        if (bestMatch.endpoint === "start") {
            bestMatch.wire.startComponentId =
                component.id;

            bestMatch.wire.startSide = side;
            bestMatch.wire.startPoint = null;
        } else {
            bestMatch.wire.endComponentId =
                component.id;

            bestMatch.wire.endSide = side;
            bestMatch.wire.endPoint = null;
        }

        rebuildWire(bestMatch.wire);

        connectionCount += 1;
    }

    return connectionCount;
}
function reconnectMatchingLooseEnds(component) {
    let connectionCount = 0;

    for (const side of ["left", "right"]) {
        if (terminalConnected(component.id, side)) {
            continue;
        }

        const terminal =
            terminalPosition(component, side);

        let bestMatch = null;

        for (const wire of wires) {
            if (!wire.startComponentId) {
                const looseStart =
                    wire.startPoint ||
                    wire.route[0];

                const startDistance =
                    distance(
                        terminal,
                        looseStart
                    );

                if (
                    startDistance <= 1 &&
                    (
                        !bestMatch ||
                        startDistance < bestMatch.distance
                    )
                ) {
                    bestMatch = {
                        wire,
                        endpoint: "start",
                        distance: startDistance
                    };
                }
            }

            if (!wire.endComponentId) {
                const looseEnd =
                    wire.endPoint ||
                    wire.route[
                        wire.route.length - 1
                    ];

                const endDistance =
                    distance(
                        terminal,
                        looseEnd
                    );

                if (
                    endDistance <= 1 &&
                    (
                        !bestMatch ||
                        endDistance < bestMatch.distance
                    )
                ) {
                    bestMatch = {
                        wire,
                        endpoint: "end",
                        distance: endDistance
                    };
                }
            }
        }

        if (!bestMatch) {
            continue;
        }

        if (bestMatch.endpoint === "start") {
            bestMatch.wire.startComponentId =
                component.id;

            bestMatch.wire.startSide =
                side;

            bestMatch.wire.startPoint =
                null;
        } else {
            bestMatch.wire.endComponentId =
                component.id;

            bestMatch.wire.endSide =
                side;

            bestMatch.wire.endPoint =
                null;
        }

        rebuildWire(bestMatch.wire);

        connectionCount += 1;
    }

    return connectionCount;
}
function autoConnect(component) {
    if (!component) {
        return false;
    }

    const wireMatch =
        nearestWireSegmentForComponent(
            component
        );

    if (wireMatch) {
        const inserted =
            connectComponentToWire(
                component,
                wireMatch
            );

        if (inserted) {
            return true;
        }
    }

    const looseConnections =
        connectLooseWireEnds(component);

    if (looseConnections > 0) {
        setStatus(
            `${component.displayName} connected to ` +
            `${looseConnections} loose wire end` +
            `${looseConnections === 1 ? "" : "s"}.`
        );

        return true;
    }

    return false;
}
/* =========================================================
   SIMULATION GRAPH
========================================================= */

function createGraph() {
    const forwardGraph = new Map();
    const reverseGraph = new Map();

    function ensureNode(node) {
        if (!forwardGraph.has(node)) {
            forwardGraph.set(node, []);
        }

        if (!reverseGraph.has(node)) {
            reverseGraph.set(node, []);
        }
    }

    function addDirectedEdge(
        from,
        to,
        edgeData
    ) {
        ensureNode(from);
        ensureNode(to);

        forwardGraph.get(from).push({
            node: to,
            ...edgeData
        });

        reverseGraph.get(to).push({
            node: from,
            ...edgeData
        });
    }

    function addBidirectionalEdge(
        nodeA,
        nodeB,
        edgeData
    ) {
        addDirectedEdge(
            nodeA,
            nodeB,
            edgeData
        );

        addDirectedEdge(
            nodeB,
            nodeA,
            edgeData
        );
    }

    for (const component of components) {
        const left =
            nodeKey(component.id, "left");

        const right =
            nodeKey(component.id, "right");

        ensureNode(left);
        ensureNode(right);

        if (
            component.type === "battery" ||
            component.faulty ||
            component.destroyed
        ) {
            continue;
        }

        /*
         * LED and diode polarity:
         *
         * Current is permitted from the logical left
         * terminal to the logical right terminal.
         *
         * Rotating the component rotates the physical
         * terminals while preserving the component's
         * anode/cathode relationship.
         */
        if (
            component.type === "led" ||
            component.type === "diode"
        ) {
            addDirectedEdge(
                left,
                right,
                {
                    type: "component",
                    componentId: component.id
                }
            );
        } else {
            addBidirectionalEdge(
                left,
                right,
                {
                    type: "component",
                    componentId: component.id
                }
            );
        }
    }

    for (const wire of wires) {
        if (
            !wire.startComponentId ||
            !wire.endComponentId
        ) {
            continue;
        }

        const startNode =
            nodeKey(
                wire.startComponentId,
                wire.startSide
            );

        const endNode =
            nodeKey(
                wire.endComponentId,
                wire.endSide
            );

        addBidirectionalEdge(
            startNode,
            endNode,
            {
                type: "wire",
                wireId: wire.id
            }
        );
    }

    return {
        forwardGraph,
        reverseGraph
    };
}

function reachableNodes(
    graph,
    startNode
) {
    const visited = new Set();
    const queue = [startNode];

    while (queue.length > 0) {
        const node = queue.shift();

        if (visited.has(node)) {
            continue;
        }

        visited.add(node);

        const edges =
            graph.get(node) || [];

        for (const edge of edges) {
            if (!visited.has(edge.node)) {
                queue.push(edge.node);
            }
        }
    }

    return visited;
}

function resetSimulation() {
	simulationFaults = [];

    for (const component of components) {
component.live = {
    powered: false,
    failed: false,
    voltage: 0,
    appliedVoltage: 0,
    current: 0,
    watts: 0,
    voltageDrop: 0,
    direction: null,
    status: "Stopped"
};
/*
 * Remove temporary simulation damage.
 */
component.destroyed = false;

component.element.classList.remove(
    "destroyed"
);
        component.element.classList.remove(
            "led-powered",
            "led-heating",
            "led-blown",
            "led-burnt",
            "motor-running",
            "fuse-powered",
            "fuse-heating",
            "fuse-blown"
        );

        component.element.style.removeProperty(
            "--motor-duration"
        );

        if (component.motorAnimation) {
            component.motorAnimation.cancel();
            component.motorAnimation = null;
        }

        const motorRotor =
            component.element.querySelector(
                ".motor-rotor"
            );

        if (motorRotor) {
            motorRotor.style.transform = "";
        }

        if (component.type === "led") {
            component.element.classList.add(
                "led-off"
            );
        }

if (component.type === "led") {
    component.element.style.setProperty(
        "--led-glow",
        component.properties.color ||
        "#ff0000"
    );
}

        component.element.style.removeProperty(
            "--led-brightness"
        );

        component.element.style.removeProperty(
            "--led-glow-strength"
        );

        component.element.style.removeProperty(
            "--led-heat-level"
        );

        component.element.style.removeProperty(
            "--led-heat-duration"
        );
    }

    for (const wire of wires) {
        wire.live = {
            powered: false,
            current: 0
        };

        wire.groupElement.classList.remove(
            "running",
            "reverse"
        );
    }

    liveTooltip.hidden = true;
}

/* =========================================================
   SIMULATION
========================================================= */
function graphDistances(
    graph,
    startingNodes
) {
    const distances = new Map();
    const queue = [];

    for (const node of startingNodes) {
        if (!distances.has(node)) {
            distances.set(node, 0);
            queue.push(node);
        }
    }

    while (queue.length > 0) {
        const node =
            queue.shift();

        const currentDistance =
            distances.get(node);

        const edges =
            graph.get(node) || [];

        for (const edge of edges) {
            if (distances.has(edge.node)) {
                continue;
            }

            distances.set(
                edge.node,
                currentDistance + 1
            );

            queue.push(edge.node);
        }
    }

    return distances;
}
function componentFlowDistance(
    component,
    positiveDistances
) {
    const leftDistance =
        positiveDistances.get(
            nodeKey(component.id, "left")
        );

    const rightDistance =
        positiveDistances.get(
            nodeKey(component.id, "right")
        );

    const distances = [
        leftDistance,
        rightDistance
    ].filter(Number.isFinite);

    if (distances.length === 0) {
        return Infinity;
    }

    return Math.min(...distances);
}
function pointOnOrthogonalSegment(
    point,
    segmentStart,
    segmentEnd
) {
    const minimumX =
        Math.min(segmentStart.x, segmentEnd.x);

    const maximumX =
        Math.max(segmentStart.x, segmentEnd.x);

    const minimumY =
        Math.min(segmentStart.y, segmentEnd.y);

    const maximumY =
        Math.max(segmentStart.y, segmentEnd.y);

    const horizontal =
        segmentStart.y === segmentEnd.y;

    const vertical =
        segmentStart.x === segmentEnd.x;

    if (horizontal) {
        return (
            point.y === segmentStart.y &&
            point.x >= minimumX &&
            point.x <= maximumX
        );
    }

    if (vertical) {
        return (
            point.x === segmentStart.x &&
            point.y >= minimumY &&
            point.y <= maximumY
        );
    }

    return false;
}

function orthogonalSegmentsTouch(
    firstStart,
    firstEnd,
    secondStart,
    secondEnd
) {
    const firstHorizontal =
        firstStart.y === firstEnd.y;

    const firstVertical =
        firstStart.x === firstEnd.x;

    const secondHorizontal =
        secondStart.y === secondEnd.y;

    const secondVertical =
        secondStart.x === secondEnd.x;

    if (
        (!firstHorizontal && !firstVertical) ||
        (!secondHorizontal && !secondVertical)
    ) {
        return false;
    }

    /*
     * Two horizontal segments on the same row.
     */
    if (firstHorizontal && secondHorizontal) {
        if (firstStart.y !== secondStart.y) {
            return false;
        }

        const firstMinimum =
            Math.min(firstStart.x, firstEnd.x);

        const firstMaximum =
            Math.max(firstStart.x, firstEnd.x);

        const secondMinimum =
            Math.min(secondStart.x, secondEnd.x);

        const secondMaximum =
            Math.max(secondStart.x, secondEnd.x);

        return (
            firstMaximum >= secondMinimum &&
            secondMaximum >= firstMinimum
        );
    }

    /*
     * Two vertical segments on the same column.
     */
    if (firstVertical && secondVertical) {
        if (firstStart.x !== secondStart.x) {
            return false;
        }

        const firstMinimum =
            Math.min(firstStart.y, firstEnd.y);

        const firstMaximum =
            Math.max(firstStart.y, firstEnd.y);

        const secondMinimum =
            Math.min(secondStart.y, secondEnd.y);

        const secondMaximum =
            Math.max(secondStart.y, secondEnd.y);

        return (
            firstMaximum >= secondMinimum &&
            secondMaximum >= firstMinimum
        );
    }

    /*
     * One horizontal and one vertical segment.
     */
    const horizontalStart =
        firstHorizontal
            ? firstStart
            : secondStart;

    const horizontalEnd =
        firstHorizontal
            ? firstEnd
            : secondEnd;

    const verticalStart =
        firstVertical
            ? firstStart
            : secondStart;

    const verticalEnd =
        firstVertical
            ? firstEnd
            : secondEnd;

    const crossingPoint = {
        x: verticalStart.x,
        y: horizontalStart.y
    };

    return (
        pointOnOrthogonalSegment(
            crossingPoint,
            horizontalStart,
            horizontalEnd
        ) &&
        pointOnOrthogonalSegment(
            crossingPoint,
            verticalStart,
            verticalEnd
        )
    );
}

function wiresTouch(firstWire, secondWire) {
    if (
        !Array.isArray(firstWire.route) ||
        !Array.isArray(secondWire.route)
    ) {
        return false;
    }

    for (
        let firstIndex = 0;
        firstIndex < firstWire.route.length - 1;
        firstIndex++
    ) {
        const firstStart =
            firstWire.route[firstIndex];

        const firstEnd =
            firstWire.route[firstIndex + 1];

        for (
            let secondIndex = 0;
            secondIndex < secondWire.route.length - 1;
            secondIndex++
        ) {
            const secondStart =
                secondWire.route[secondIndex];

            const secondEnd =
                secondWire.route[secondIndex + 1];

            if (
                orthogonalSegmentsTouch(
                    firstStart,
                    firstEnd,
                    secondStart,
                    secondEnd
                )
            ) {
                return true;
            }
        }
    }

    return false;
}

function wireConnectedToTerminal(
    wire,
    componentId,
    side
) {
    return (
        (
            wire.startComponentId === componentId &&
            wire.startSide === side
        ) ||
        (
            wire.endComponentId === componentId &&
            wire.endSide === side
        )
    );
}

function batteryHasWireShort(battery) {
    const positiveWireIndexes = [];
    const negativeWireIndexes = [];

    for (
        let index = 0;
        index < wires.length;
        index++
    ) {
        const wire = wires[index];

        if (
            wireConnectedToTerminal(
                wire,
                battery.id,
                "right"
            )
        ) {
            positiveWireIndexes.push(index);
        }

        if (
            wireConnectedToTerminal(
                wire,
                battery.id,
                "left"
            )
        ) {
            negativeWireIndexes.push(index);
        }
    }

    if (
        positiveWireIndexes.length === 0 ||
        negativeWireIndexes.length === 0
    ) {
        return false;
    }

    /*
     * Follow all touching wires starting at battery positive.
     */
    const visited = new Set();
    const queue = [...positiveWireIndexes];

    while (queue.length > 0) {
        const wireIndex = queue.shift();

        if (visited.has(wireIndex)) {
            continue;
        }

        visited.add(wireIndex);

        if (negativeWireIndexes.includes(wireIndex)) {
            return true;
        }

        for (
            let otherIndex = 0;
            otherIndex < wires.length;
            otherIndex++
        ) {
            if (
                visited.has(otherIndex) ||
                otherIndex === wireIndex
            ) {
                continue;
            }

            if (
                wiresTouch(
                    wires[wireIndex],
                    wires[otherIndex]
                )
            ) {
                queue.push(otherIndex);
            }
        }
    }

    return negativeWireIndexes.some(index => {
        return visited.has(index);
    });
}
function runSimulation() {
    if (running) {
        return;
    }

    cancelWire();
    clearSelection();

    running = true;

    runButton.disabled = true;
    stopButton.disabled = false;

    for (const component of components) {
        component.element.classList.add(
            "locked"
        );
    }

    resetSimulation();

    const batteries =
        components.filter(component => {
            return (
                component.type === "battery" &&
                !component.faulty &&
                !component.destroyed
            );
        });

    if (batteries.length === 0) {
        faultSummary.textContent =
            "No working battery was found.";

        faultList.innerHTML =
            "<li>No working battery is available.</li>";

        setStatus(
            "Simulation running: no working battery."
        );

        return;
    }

    const {
        forwardGraph,
        reverseGraph
    } = createGraph();
const positiveSourceNodes =
    batteries.map(battery => {
        return nodeKey(
            battery.id,
            "right"
        );
    });

const positiveDistances =
    graphDistances(
        forwardGraph,
        positiveSourceNodes
    );
    const activeNodes = new Set();
    const positiveReachableNodes = new Set();

    let sourceVoltage = 0;
    let sourceMaximumCurrent = Infinity;

    for (const battery of batteries) {
        const positiveNode =
            nodeKey(battery.id, "right");

        const negativeNode =
            nodeKey(battery.id, "left");

        const forwardReachable =
            reachableNodes(
                forwardGraph,
                positiveNode
            );

        const canReachNegative =
            reachableNodes(
                reverseGraph,
                negativeNode
            );

        for (const node of forwardReachable) {
            positiveReachableNodes.add(node);

            if (canReachNegative.has(node)) {
                activeNodes.add(node);
            }
        }

        const batteryVoltageValue =
            Number(
                battery.properties.voltage
            ) || 0;

        const batteryCurrentValue =
            Number(
                battery.properties.amperage
            ) || 0;

        sourceVoltage =
            Math.max(
                sourceVoltage,
                batteryVoltageValue
            );

        sourceMaximumCurrent =
            Math.min(
                sourceMaximumCurrent,
                batteryCurrentValue > 0
                    ? batteryCurrentValue
                    : Infinity
            );

        battery.live.powered = true;
        battery.live.voltage =
            batteryVoltageValue;

        battery.live.voltageDrop =
            batteryVoltageValue;

        battery.live.status =
            activeNodes.has(positiveNode)
                ? "Supplying circuit"
                : "No complete circuit";
    }

    if (!Number.isFinite(sourceMaximumCurrent)) {
        sourceMaximumCurrent = 0;
    }

    const activeComponents = [];

    for (const component of components) {
        if (component.type === "battery") {
            continue;
        }

        const left =
            nodeKey(component.id, "left");

        const right =
            nodeKey(component.id, "right");

        const isActive =
            activeNodes.has(left) &&
            activeNodes.has(right) &&
            !component.faulty &&
            !component.destroyed;

        if (isActive) {
            activeComponents.push(component);
        }
    }

    let totalResistance = 0;
    let fixedVoltageDrop = 0;

    for (const component of activeComponents) {
        if (component.type === "resistor") {
            totalResistance +=
                Math.max(
                    0,
                    Number(
                        component.properties.ohms
                    ) || 0
                );
        }

        if (
            component.type === "motor" ||
            component.type === "fuse"
        ) {
            totalResistance +=
                Math.max(
                    0,
                    Number(
                        component.properties.resistance
                    ) || 0
                );
        }

        if (
            component.type === "led" ||
            component.type === "diode"
        ) {
            fixedVoltageDrop +=
                Math.max(
                    0,
                    Number(
                        component.properties.forwardVoltage
                    ) || 0
                );
        }
    }

    const resistorVoltage =
        Math.max(
            0,
            sourceVoltage -
            fixedVoltageDrop
        );

const completeCircuit =
    batteries.some(battery => {
        return activeNodes.has(
            nodeKey(battery.id, "right")
        );
    });

/*
 * A completed circuit with no resistance and no normal
 * diode voltage drop is treated as a direct short.
 *
 * Switches and wires have effectively zero resistance.
 */
const geometricWireShort =
    batteries.some(battery => {
        return batteryHasWireShort(battery);
    });

const zeroResistanceShort =
    completeCircuit &&
    totalResistance <= 0.000001 &&
    fixedVoltageDrop <= 0.000001;

const shortCircuit =
    geometricWireShort ||
    zeroResistanceShort;
let circuitCurrent = 0;

if (completeCircuit) {
    if (shortCircuit) {
        /*
         * The battery current setting acts as the maximum
         * available fault current.
         */
        circuitCurrent = sourceMaximumCurrent;

        simulationFaults.push({
            name: "Circuit",
            status:
                `Short circuit detected — ` +
                `${circuitCurrent.toFixed(3)} A available`
        });
    } else if (totalResistance > 0) {
        circuitCurrent =
            resistorVoltage /
            totalResistance;
    } else if (activeComponents.length > 0) {
        /*
         * This allows an unprotected diode or LED circuit
         * to receive the source's available current, which
         * can then destroy the component.
         */
        circuitCurrent =
            sourceMaximumCurrent;
    }
}

circuitCurrent =
    Math.min(
        Math.max(0, circuitCurrent),
        sourceMaximumCurrent
    );

if (!Number.isFinite(circuitCurrent)) {
    circuitCurrent = 0;
}

    circuitCurrent =
        Math.min(
            circuitCurrent,
            sourceMaximumCurrent
        );

    if (!Number.isFinite(circuitCurrent)) {
        circuitCurrent = 0;
    }

    for (const battery of batteries) {
        battery.live.current =
            circuitCurrent;

        battery.live.watts =
            battery.live.voltage *
            circuitCurrent;
    }

   /*
 * Sort powered components by their electrical distance
 * from the battery positive terminal.
 */
const orderedComponents =
    components
        .filter(component => {
            return component.type !== "battery";
        })
        .sort((componentA, componentB) => {
            return (
                componentFlowDistance(
                    componentA,
                    positiveDistances
                ) -
                componentFlowDistance(
                    componentB,
                    positiveDistances
                )
            );
        });

let remainingVoltage = sourceVoltage;
let currentPathOpened = false;
let componentFailureDetected = false;

for (const component of orderedComponents) {
    const leftNode =
        nodeKey(component.id, "left");

    const rightNode =
        nodeKey(component.id, "right");

    const leftActive =
        activeNodes.has(leftNode);

    const rightActive =
        activeNodes.has(rightNode);

    const leftHasPositive =
        positiveReachableNodes.has(leftNode);

    const rightHasPositive =
        positiveReachableNodes.has(rightNode);

    const isPowered =
        leftActive &&
        rightActive &&
        !component.faulty &&
        !component.destroyed;

    component.live.powered =
        isPowered;

    component.live.appliedVoltage = 0;
    component.live.voltage = 0;
    component.live.voltageDrop = 0;
    component.live.current = 0;
    component.live.watts = 0;
if (currentPathOpened) {
    component.live.powered = false;
    component.live.status =
        "No current — upstream circuit is open";

    continue;
}
    if (component.faulty) {
        component.live.appliedVoltage =
            leftHasPositive ||
            rightHasPositive
                ? remainingVoltage
                : 0;

        component.live.voltage =
            component.live.appliedVoltage;

        component.live.voltageDrop =
            component.live.appliedVoltage;

        component.live.status =
            component.live.appliedVoltage > 0
                ? "Fault - current stops here"
                : "Fault - no source voltage";

        /*
         * No voltage is propagated beyond an open fault.
         */
        remainingVoltage = 0;
        currentPathOpened = true;

        continue;
    }

    if (component.destroyed) {
        component.live.appliedVoltage =
            leftHasPositive ||
            rightHasPositive
                ? remainingVoltage
                : 0;

        component.live.voltage =
            component.live.appliedVoltage;

        component.live.voltageDrop =
            component.live.appliedVoltage;

        component.live.status =
            "Destroyed - open circuit";

        remainingVoltage = 0;
        currentPathOpened = true;


        continue;
    }

    if (!isPowered) {
        const hasVoltage =
            leftHasPositive ||
            rightHasPositive;

        component.live.appliedVoltage =
            hasVoltage
                ? remainingVoltage
                : 0;

        component.live.voltage =
            component.live.appliedVoltage;

        if (
            (
                component.type === "led" ||
                component.type === "diode"
            ) &&
            rightHasPositive &&
            !leftHasPositive
        ) {
            component.live.status =
                "Reverse polarity - blocking current";
        } else if (hasVoltage) {
            component.live.status =
                "Open circuit";
        } else {
            component.live.status =
                "No power";
        }

        continue;
    }

    /*
     * Voltage available at the input of this component.
     */
    component.live.appliedVoltage =
        Math.max(0, remainingVoltage);

    component.live.current =
        circuitCurrent;

    if (component.type === "resistor") {
        const resistance =
            Math.max(
                0,
                Number(
                    component.properties.ohms
                ) || 0
            );

        component.live.voltageDrop =
            Math.min(
                component.live.appliedVoltage,
                circuitCurrent * resistance
            );
    } else if (
        component.type === "motor" ||
        component.type === "fuse"
    ) {
        const resistance =
            Math.max(
                0,
                Number(
                    component.properties.resistance
                ) || 0
            );

        component.live.voltageDrop =
            Math.min(
                component.live.appliedVoltage,
                circuitCurrent * resistance
            );
    } else if (
        component.type === "led" ||
        component.type === "diode"
    ) {
        const forwardVoltage =
            Math.max(
                0,
                Number(
                    component.properties.forwardVoltage
                ) || 0
            );

        /*
         * A diode or LED cannot drop more voltage than
         * is actually available at its input.
         */
        component.live.voltageDrop =
            Math.min(
                component.live.appliedVoltage,
                forwardVoltage
            );
    } else {
        component.live.voltageDrop = 0;
    }

    /*
     * Keep `voltage` as the voltage arriving at the part.
     */
    component.live.voltage =
        component.live.appliedVoltage;

    component.live.watts =
        component.live.voltageDrop *
        circuitCurrent;

    component.live.status =
        "Powered";

    /*
     * Carry the remaining voltage to the next component.
     */
    remainingVoltage =
        Math.max(
            0,
            remainingVoltage -
            component.live.voltageDrop
        );

if (component.type === "fuse") {
    const maximumCurrent =
        Math.max(
            0.000001,
            Number(
                component.properties.maxCurrent
            ) || 5
        );

    const currentRatio =
        component.live.current /
        maximumCurrent;

    const fusePowered =
        isPowered &&
        component.live.current > 0 &&
        !component.live.failed;

    component.element.classList.toggle(
        "fuse-powered",
        fusePowered
    );

    component.element.classList.toggle(
        "fuse-heating",
        fusePowered && currentRatio >= 0.8
    );

    if (
        fusePowered &&
        component.live.current >
            maximumCurrent * 1.001
    ) {
        component.live.failed = true;
        component.live.powered = false;
        component.live.current = 0;
        component.live.watts = 0;

        component.live.status =
            `Fuse blown — ` +
            `${circuitCurrent.toFixed(3)} A applied, ` +
            `${maximumCurrent.toFixed(3)} A maximum`;

        component.element.classList.remove(
            "fuse-powered",
            "fuse-heating"
        );

        component.element.classList.add(
            "fuse-blown"
        );

        simulationFaults.push({
            name: component.displayName,
            status: component.live.status
        });

        componentFailureDetected = true;
        currentPathOpened = true;
        remainingVoltage = 0;

        continue;
    }

    if (fusePowered) {
        component.live.status =
            currentRatio >= 0.8
                ? "Powered — fuse heating"
                : "Powered — fuse normal";
    }
}

if (component.type === "led") {
    const ratedForwardVoltage = Math.max(
        0.000001,
        Number(component.properties.forwardVoltage) || 2
    );

    const maximumCurrent = Math.max(
        0.000001,
        Number(component.properties.maxCurrent) || 0.02
    );

    const measuredCurrent = Math.max(0, component.live.current);
    const voltageRatio =
        component.live.appliedVoltage / ratedForwardVoltage;

    /*
     * LED damage follows the LED's configured current rating.
     * Heating begins at 50% of the rating. The LED opens only
     * when current is genuinely above the rating, not equal to it.
     */
    const heatCurrent = maximumCurrent * 0.5;
    const blowCurrent = maximumCurrent;
    const currentTolerance = Math.max(0.000001, maximumCurrent * 0.001);

    const heatLevel = clamp(
        (measuredCurrent - heatCurrent) /
            Math.max(0.000001, blowCurrent - heatCurrent),
        0,
        1
    );

    const ledOn =
        isPowered &&
        measuredCurrent > 0 &&
        component.live.voltageDrop >= ratedForwardVoltage * 0.6 &&
        !component.live.failed;

    /* Current alone controls LED damage. */
    const ledBlown =
        ledOn && measuredCurrent > blowCurrent + currentTolerance;

    if (ledBlown) {
        component.live.failed = true;
        component.live.powered = false;
        component.live.current = 0;
        component.live.watts = 0;
        component.live.status =
            `LED blown open — ${measuredCurrent.toFixed(3)} A applied, ` +
            `${blowCurrent.toFixed(3)} A maximum`;

        component.element.classList.remove(
            "led-powered",
            "led-heating",
            "led-off",
            "led-burnt"
        );
        component.element.classList.add("destroyed", "led-blown");
        component.element.style.setProperty("--led-glow-strength", "0");
        component.element.style.setProperty("--led-brightness", "0.2");

        simulationFaults.push({
            name: component.displayName,
            status: component.live.status
        });

        componentFailureDetected = true;
        currentPathOpened = true;
        remainingVoltage = 0;
        continue;
    }

    const currentBrightness = clamp(measuredCurrent / maximumCurrent, 0, 1);
    const voltageBrightness = clamp(voltageRatio, 0, 1);
    const brightness = clamp(currentBrightness * voltageBrightness, 0, 1);
    const ledHeating = ledOn && measuredCurrent >= heatCurrent;

    component.element.classList.toggle("led-powered", ledOn);
    component.element.classList.toggle("led-heating", ledHeating);
    component.element.classList.toggle("led-off", !ledOn);
    component.element.classList.remove("led-blown", "led-burnt", "destroyed");

    component.element.style.setProperty(
        "--led-glow",
        component.properties.color || "#ff0000"
    );
    component.element.style.setProperty("--led-heat-level", String(heatLevel));
    component.element.style.setProperty(
        "--led-heat-duration",
        `${Math.max(0.22, 0.9 - heatLevel * 0.62)}s`
    );
    component.element.style.setProperty(
        "--led-glow-strength",
        ledOn ? String(0.2 + brightness * 0.9 + heatLevel * 0.9) : "0"
    );
    component.element.style.setProperty(
        "--led-brightness",
        ledOn ? String(0.3 + brightness * 0.7) : "0.25"
    );

    if (ledHeating) {
        component.live.status =
            `LED heating — ${measuredCurrent.toFixed(3)} A; ` +
            `breaks at ${blowCurrent.toFixed(3)} A`;
    } else if (ledOn) {
        component.live.status =
            brightness < 0.25
                ? "Powered — very dim"
                : brightness < 0.6
                    ? "Powered — dim"
                    : "Powered — normal";
    }
}
}
/*
 * Spin each motor rotor directly with the browser animation
 * API. This does not depend on motor.css.
 */
/*
 * Spin motors according to electrical polarity.
 *
 * Positive on the logical left terminal:
 * clockwise.
 *
 * Positive on the logical right terminal:
 * counterclockwise.
 */
for (const component of components) {
    if (component.type !== "motor") {
        continue;
    }

    const rotor =
        component.element.querySelector(
            ".motor-rotor"
        );

    if (!rotor) {
        continue;
    }

    const maximumCurrent =
        Math.max(
            0.000001,
            Number(
                component.properties.maxCurrent
            ) || 2
        );

    const ratedVoltage =
        Math.max(
            0.000001,
            Number(
                component.properties.voltage
            ) || 12
        );

    const leftDistance =
        positiveDistances.get(
            nodeKey(component.id, "left")
        );

    const rightDistance =
        positiveDistances.get(
            nodeKey(component.id, "right")
        );

    /*
     * The terminal electrically closer to battery positive
     * determines motor direction.
     */
    const reverseDirection =
        Number.isFinite(rightDistance) &&
        (
            !Number.isFinite(leftDistance) ||
            rightDistance < leftDistance
        );

    component.live.direction =
        reverseDirection
            ? "reverse"
            : "forward";

    const motorRunning =
        component.live.current > 0 &&
        component.live.powered &&
        !component.faulty &&
        !component.destroyed &&
        !shortCircuit &&
        !componentFailureDetected;

    const currentRatio =
        clamp(
            component.live.current /
            maximumCurrent,
            0,
            1.5
        );

    const voltageRatio =
        clamp(
            component.live.voltageDrop /
            ratedVoltage,
            0,
            1.5
        );

    const speedRatio =
        clamp(
            (
                currentRatio +
                voltageRatio
            ) / 2,
            0.15,
            1.5
        );

    const duration =
        1000 / speedRatio;

    const endingRotation =
        reverseDirection
            ? -360
            : 360;

    if (motorRunning) {
        if (component.motorAnimation) {
            component.motorAnimation.cancel();
            component.motorAnimation = null;
        }

        rotor.style.transformBox =
            "fill-box";

        rotor.style.transformOrigin =
            "center";

        component.motorAnimation =
            rotor.animate(
                [
                    {
                        transform:
                            "rotate(0deg)"
                    },
                    {
                        transform:
                            `rotate(${endingRotation}deg)`
                    }
                ],
                {
                    duration,
                    iterations: Infinity,
                    easing: "linear"
                }
            );

        component.live.status =
            reverseDirection
                ? "Powered — running reverse"
                : "Powered — running forward";
    } else if (component.motorAnimation) {
        component.motorAnimation.cancel();
        component.motorAnimation = null;

        rotor.style.transform = "";
    }
}

for (const wire of wires) {
    wire.groupElement.classList.remove(
        "running",
        "reverse"
    );

    if (
        !wire.startComponentId ||
        !wire.endComponentId
    ) {
        wire.live.powered = false;
        wire.live.current = 0;
        continue;
    }

    const startNode =
        nodeKey(
            wire.startComponentId,
            wire.startSide
        );

    const endNode =
        nodeKey(
            wire.endComponentId,
            wire.endSide
        );

    const startDistance =
        positiveDistances.get(startNode);

    const endDistance =
        positiveDistances.get(endNode);

const wirePowered =
    activeNodes.has(startNode) &&
    activeNodes.has(endNode) &&
    circuitCurrent > 0 &&
    !shortCircuit &&
    !componentFailureDetected;

    wire.live.current =
        wirePowered
            ? circuitCurrent
            : 0;

    if (!wirePowered) {
        continue;
    }

    /*
     * The SVG polyline is stored start-to-end.
     *
     * If the electrical source reaches the wire's end
     * before its start, current must animate backward.
     */
    const reverseFlow =
        Number.isFinite(endDistance) &&
        (
            !Number.isFinite(startDistance) ||
            endDistance < startDistance
        );

    wire.groupElement.classList.add(
        "running"
    );

    wire.groupElement.classList.toggle(
        "reverse",
        reverseFlow
    );
}

const componentFaults =
    components
        .filter(component => {
            return (
                component.faulty ||
                component.destroyed
            );
        })
        .map(component => {
            return {
                name: component.displayName,
                status: component.live.status
            };
        });

const allFaults = [
    ...simulationFaults
];

for (const fault of componentFaults) {
    const alreadyIncluded =
        allFaults.some(existingFault => {
            return (
                existingFault.name === fault.name &&
                existingFault.status === fault.status
            );
        });

    if (!alreadyIncluded) {
        allFaults.push(fault);
    }
}

if (allFaults.length === 0) {
    faultSummary.textContent =
        activeComponents.length > 0
            ? "Circuit completed with no detected faults."
            : "No complete current path was found.";

    faultList.innerHTML =
        activeComponents.length > 0
            ? (
                '<li class="no-faults">' +
                "No faults detected." +
                "</li>"
            )
            : (
                "<li>" +
                "The circuit is open, incomplete, " +
                "or has reversed polarity." +
                "</li>"
            );
} else {
    faultSummary.textContent =
        `${allFaults.length} fault` +
        `${allFaults.length === 1 ? "" : "s"} detected.`;

    faultList.innerHTML =
        allFaults
            .map(fault => {
                return (
                    "<li>" +
                    `${fault.name}: ` +
                    `${fault.status}.` +
                    "</li>"
                );
            })
            .join("");
}
    if (shortCircuit) {
    for (const component of components) {
        if (component.type !== "led") continue;

        component.live.failed = true;
        component.live.powered = false;
        component.live.current = 0;
        component.live.watts = 0;
        component.live.status = "Burnt out by short circuit";

        component.element.classList.remove("led-powered");
        component.element.classList.add("led-off", "destroyed", "led-burnt");
        component.element.style.setProperty("--led-glow-strength", "0");
        component.element.style.setProperty("--led-brightness", "0.2");
    }

    setStatus(
        "Simulation fault: short circuit detected."
    );
} else if (componentFailureDetected) {
    setStatus(
        "Simulation running: a component was destroyed."
    );
} else {
    setStatus("Simulation running.");
}
}

function stopSimulation() {
    if (!running) {
        return;
    }

    running = false;

    runButton.disabled = false;
    stopButton.disabled = true;

    for (const component of components) {
        component.element.classList.remove(
            "locked"
        );
    }

    resetSimulation();
    setMode("select");

    setStatus("Simulation stopped.");
}

/* =========================================================
   TOOLTIP
========================================================= */

function addTooltipEvents(component) {
    component.element.addEventListener(
        "mouseenter",
        event => {
            if (!running) {
                return;
            }

            showTooltip(
                component,
                event.clientX,
                event.clientY
            );
        }
    );

    component.element.addEventListener(
        "mousemove",
        event => {
            if (!running) {
                return;
            }

            liveTooltip.style.left =
                `${event.clientX + 14}px`;

            liveTooltip.style.top =
                `${event.clientY + 14}px`;
        }
    );

    component.element.addEventListener(
        "mouseleave",
        () => {
            liveTooltip.hidden = true;
        }
    );
}

function showTooltip(
    component,
    clientX,
    clientY
) {
    const live = component.live;

    let specificationHTML = "";

    if (component.type === "battery") {
        specificationHTML = `
            <div>
    Voltage entering component:
    <span class="live-value">
        ${Number(
            live.appliedVoltage ?? live.voltage
        ).toFixed(3)} V
    </span>
</div>

<div>
    Component voltage drop:
    <span class="live-value">
        ${Number(
            live.voltageDrop
        ).toFixed(3)} V
    </span>
</div>

<div>
    Voltage after component:
    <span class="live-value">
        ${Math.max(
            0,
            Number(
                live.appliedVoltage ??
                live.voltage
            ) -
            Number(live.voltageDrop)
        ).toFixed(3)} V
    </span>
</div>
        `;
    }

    if (component.type === "resistor") {
        specificationHTML = `
            <div>
                Resistance:
                <span class="live-value">
                    ${Number(
                        component.properties.ohms
                    ).toFixed(2)} Ω
                </span>
            </div>

            <div>
                Maximum power:
                <span class="live-value">
                    ${Number(
                        component.properties.maxWatts
                    ).toFixed(3)} W
                </span>
            </div>
        `;
    }

    if (component.type === "diode") {
        specificationHTML = `
            <div>
                Forward voltage:
                <span class="live-value">
                    ${Number(
                        component.properties.forwardVoltage
                    ).toFixed(3)} V
                </span>
            </div>

            <div>
                Maximum current:
                <span class="live-value">
                    ${Number(
                        component.properties.maxCurrent
                    ).toFixed(3)} A
                </span>
            </div>
        `;
    }

    if (component.type === "led") {
        specificationHTML = `
            <div>
                Forward voltage:
                <span class="live-value">
                    ${Number(
                        component.properties.forwardVoltage
                    ).toFixed(3)} V
                </span>
            </div>

            <div>
                Maximum current:
                <span class="live-value">
                    ${Number(
                        component.properties.maxCurrent
                    ).toFixed(3)} A
                </span>
            </div>
        `;
    }

    if (component.type === "switch") {
        specificationHTML = `
            <div>
                Maximum current:
                <span class="live-value">
                    ${Number(
                        component.properties.maxCurrent
                    ).toFixed(3)} A
                </span>
            </div>
        `;
    }

    let operatingVoltage = live.voltageDrop;

    if (component.type === "battery") {
        operatingVoltage =
            live.voltage;
    }

    liveTooltip.innerHTML = `
        <strong>${component.displayName}</strong>

        ${specificationHTML}

        <hr style="
            margin: 7px 0;
            border: 0;
            border-top: 1px solid #555;
        ">

        <div>
            Operating voltage:
            <span class="live-value">
                ${Number(
                    operatingVoltage
                ).toFixed(3)} V
            </span>
        </div>

        <div>
            Current:
            <span class="live-value">
                ${Number(
                    live.current
                ).toFixed(6)} A
            </span>
        </div>

        <div>
            Actual power:
            <span class="live-value">
                ${Number(
                    live.watts
                ).toFixed(4)} W
            </span>
        </div>

        <div>
            Status:
            <span class="${
                live.powered
                    ? "live-good"
                    : "live-warning"
            }">
                ${live.status}
            </span>
        </div>
    `;

    liveTooltip.style.left =
        `${clientX + 14}px`;

    liveTooltip.style.top =
        `${clientY + 14}px`;

    liveTooltip.hidden = false;
}

/* =========================================================
   PROJECT SAVE AND LOAD
========================================================= */

function projectData() {
    return {
        version: 4,

        view: {
            zoom,
            panX,
            panY
        },

        components:
            components.map(component => ({
                originalId: component.id,
                type: component.type,
                typeNumber:
                    component.typeNumber,
                displayName:
                    component.displayName,
                x: component.x,
                y: component.y,
                rotation:
                    component.rotation,
                faulty:
                    component.faulty,
                destroyed:
                    component.destroyed,
                properties:
                    copy(component.properties)
            })),

        wires:
            wires.map(wire => ({
                startComponentId:
                    wire.startComponentId,
                startSide:
                    wire.startSide,
                startPoint:
                    wire.startPoint
                        ? copy(wire.startPoint)
                        : null,

                endComponentId:
                    wire.endComponentId,
                endSide:
                    wire.endSide,
                endPoint:
                    wire.endPoint
                        ? copy(wire.endPoint)
                        : null,

                color:
                    wire.color,

                fixedRoute:
                    copy(wire.fixedRoute)
            }))
    };
}

function saveProject() {
    const blob =
        new Blob(
            [
                JSON.stringify(
                    projectData(),
                    null,
                    2
                )
            ],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download =
        "wiring-project.json";

    document.body.append(link);
    link.click();
    link.remove();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 500);

    setStatus("Project saved.");
}

function loadProject(data) {
    clearDiagram(false);

    const componentMap = new Map();

    for (
        const savedComponent of
        data.components || []
    ) {
        const definition =
            componentLibrary.find(
                item =>
                    item.type ===
                    savedComponent.type
            );

        if (!definition) {
            continue;
        }

        const component =
            placeComponent(
                definition,
                savedComponent.x,
                savedComponent.y,
                {
                    typeNumber:
                        savedComponent.typeNumber,
                    displayName:
                        savedComponent.displayName,
                    rotation:
                        savedComponent.rotation,
                    faulty:
                        savedComponent.faulty,
                    destroyed:
                        savedComponent.destroyed,
                    properties:
                        savedComponent.properties
                }
            );

        componentMap.set(
            savedComponent.originalId,
            component.id
        );
    }

    for (
        const savedWire of
        data.wires || []
    ) {
        const route =
            savedWire.fixedRoute ||
            savedWire.route;

        if (
            !Array.isArray(route) ||
            route.length < 2
        ) {
            continue;
        }

        const startComponentId =
            savedWire.startComponentId
                ? componentMap.get(
                    savedWire.startComponentId
                )
                : null;

        const endComponentId =
            savedWire.endComponentId
                ? componentMap.get(
                    savedWire.endComponentId
                )
                : null;

        createWireBetween(
            {
                componentId:
                    startComponentId,
                side:
                    startComponentId
                        ? savedWire.startSide
                        : null,
                point:
                    startComponentId
                        ? null
                        : (
                            savedWire.startPoint ||
                            route[0]
                        )
            },

            {
                componentId:
                    endComponentId,
                side:
                    endComponentId
                        ? savedWire.endSide
                        : null,
                point:
                    endComponentId
                        ? null
                        : (
                            savedWire.endPoint ||
                            route[
                                route.length - 1
                            ]
                        )
            },

            savedWire.color ||
            "#222222",

            route
        );
    }

    zoom =
        data.view?.zoom ?? 1;

    panX =
        data.view?.panX ?? 0;

    panY =
        data.view?.panY ?? 0;

    updateView();
    setMode("select");

    setStatus("Project loaded.");
}

function readFile(file) {
    const reader =
        new FileReader();

    reader.addEventListener(
        "load",
        () => {
            try {
                loadProject(
                    JSON.parse(reader.result)
                );
            } catch (error) {
                console.error(error);

                setStatus(
                    "The project could not be loaded."
                );
            }
        }
    );

    reader.readAsText(file);
}

/* =========================================================
   IMAGE EXPORT
========================================================= */

function diagramBounds() {
    if (
        components.length === 0 &&
        wires.length === 0
    ) {
        return {
            left:
                CANVAS_WIDTH / 2 - 600,
            top:
                CANVAS_HEIGHT / 2 - 400,
            right:
                CANVAS_WIDTH / 2 + 600,
            bottom:
                CANVAS_HEIGHT / 2 + 400
        };
    }

    let left = CANVAS_WIDTH;
    let top = CANVAS_HEIGHT;
    let right = 0;
    let bottom = 0;

    for (const component of components) {
        left = Math.min(
            left,
            component.x - 110
        );

        right = Math.max(
            right,
            component.x + 110
        );

        top = Math.min(
            top,
            component.y - 90
        );

        bottom = Math.max(
            bottom,
            component.y + 110
        );
    }

    for (const wire of wires) {
        for (const point of wire.route) {
            left = Math.min(left, point.x);
            right = Math.max(right, point.x);
            top = Math.min(top, point.y);
            bottom = Math.max(bottom, point.y);
        }
    }

    return {
        left:
            clamp(
                left - 100,
                0,
                CANVAS_WIDTH
            ),
        top:
            clamp(
                top - 100,
                0,
                CANVAS_HEIGHT
            ),
        right:
            clamp(
                right + 100,
                0,
                CANVAS_WIDTH
            ),
        bottom:
            clamp(
                bottom + 100,
                0,
                CANVAS_HEIGHT
            )
    };
}

function loadImage(source) {
    return new Promise(
        (resolve, reject) => {
            const image = new Image();

            image.onload =
                () => resolve(image);

            image.onerror = reject;
            image.src = source;
        }
    );
}

async function createImageBlob() {
    const bounds = diagramBounds();

    const width =
        bounds.right - bounds.left;

    const height =
        bounds.bottom - bounds.top;

    const scale = 2;

    const exportCanvas =
        document.createElement("canvas");

    exportCanvas.width =
        width * scale;

    exportCanvas.height =
        height * scale;

    const context =
        exportCanvas.getContext("2d");

    context.scale(scale, scale);

    context.translate(
        -bounds.left,
        -bounds.top
    );

    context.fillStyle = "#ffffff";

    context.fillRect(
        bounds.left,
        bounds.top,
        width,
        height
    );

    context.strokeStyle = "#dddddd";
    context.lineWidth = 1;

    for (
        let x =
            Math.floor(
                bounds.left / GRID
            ) * GRID;

        x <= bounds.right;

        x += GRID
    ) {
        context.beginPath();

        context.moveTo(
            x,
            bounds.top
        );

        context.lineTo(
            x,
            bounds.bottom
        );

        context.stroke();
    }

    for (
        let y =
            Math.floor(
                bounds.top / GRID
            ) * GRID;

        y <= bounds.bottom;

        y += GRID
    ) {
        context.beginPath();

        context.moveTo(
            bounds.left,
            y
        );

        context.lineTo(
            bounds.right,
            y
        );

        context.stroke();
    }

    for (const wire of wires) {
        if (wire.route.length < 2) {
            continue;
        }

        context.beginPath();

        context.strokeStyle =
            wire.color;

        context.lineWidth = 5;
        context.lineCap = "round";
        context.lineJoin = "round";

        context.moveTo(
            wire.route[0].x,
            wire.route[0].y
        );

        for (
            let index = 1;
            index < wire.route.length;
            index++
        ) {
            context.lineTo(
                wire.route[index].x,
                wire.route[index].y
            );
        }

        context.stroke();
    }

    for (const component of components) {
        const image =
            await loadImage(
                component.image
            );

        context.save();

        context.translate(
            component.x,
            component.y
        );

        context.rotate(
            component.rotation *
            Math.PI / 180
        );

        context.drawImage(
            image,
            -45,
            -20,
            90,
            40
        );

        context.restore();

        context.fillStyle = "#000000";
        context.font = "12px Arial";
        context.textAlign = "center";

        context.fillText(
            component.displayName,
            component.x,
            component.y + 44
        );
    }

    return new Promise(
        (resolve, reject) => {
            exportCanvas.toBlob(
                blob => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(
                            new Error(
                                "Image creation failed."
                            )
                        );
                    }
                },
                "image/png",
                1
            );
        }
    );
}

async function downloadImage() {
    try {
        const blob =
            await createImageBlob();

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =
            "wiring-diagram.png";

        document.body.append(link);
        link.click();
        link.remove();

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);

        setStatus(
            "Diagram image downloaded."
        );
    } catch (error) {
        console.error(error);

        setStatus(
            "Unable to create diagram image."
        );
    }
}

async function printDiagram() {
    const printWindow =
        window.open("", "_blank");

    if (!printWindow) {
        setStatus(
            "The print window was blocked."
        );

        return;
    }

    printWindow.document.write(
        "<p>Creating diagram...</p>"
    );

    printWindow.document.close();

    try {
        const blob =
            await createImageBlob();

        const url =
            URL.createObjectURL(blob);

        printWindow.document.open();

        printWindow.document.write(`
            <!doctype html>

            <html>
                <head>
                    <title>Wiring Diagram</title>

                    <style>
                        @page {
                            size: landscape;
                            margin: 0.25in;
                        }

                        html,
                        body {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                            padding: 0;
                            overflow: hidden;
                        }

                        body {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        img {
                            display: block;
                            width: auto;
                            height: auto;
                            max-width: calc(100vw - 0.5in);
                            max-height: calc(100vh - 0.5in);
                            object-fit: contain;
                            page-break-inside: avoid;
                        }
                    </style>
                </head>

                <body>
                    <img
                        id="diagram"
                        src="${url}"
                        alt="Wiring diagram"
                    >
                </body>
            </html>
        `);

        printWindow.document.close();

        const image =
            printWindow.document.getElementById(
                "diagram"
            );

        image.onload = () => {
            setTimeout(() => {
                printWindow.focus();
                printWindow.print();
            }, 150);
        };
    } catch (error) {
        console.error(error);

        printWindow.document.body.innerHTML =
            "<p>Unable to create diagram.</p>";
    }
}

/* =========================================================
   CLEAR
========================================================= */

function clearDiagram(
    showMessage = true
) {
    if (running) {
        stopSimulation();
    }

    components = [];
    wires = [];

    componentIdCounter = 0;
    wireIdCounter = 0;

    componentCounts = {};

    selectedComponentId = null;
    armedComponent = null;
    draggingComponentId = null;

    componentLayer.innerHTML = "";
    wireLayer.innerHTML = "";

    componentPreview.style.display =
        "none";

    cancelWire();
    clearSelection();

    faultSummary.textContent =
        "Circuit has not been tested.";

    faultList.innerHTML = "";

    if (showMessage) {
        setStatus("Diagram cleared.");
    }
}

/* =========================================================
   EVENTS
========================================================= */

componentSearch.addEventListener(
    "focus",
    () => {
        renderSearch(
            componentSearch.value
        );
    }
);

componentSearch.addEventListener(
    "click",
    () => {
        renderSearch(
            componentSearch.value
        );
    }
);

componentSearch.addEventListener(
    "input",
    () => {
        renderSearch(
            componentSearch.value
        );
    }
);

componentSearch.addEventListener(
    "keydown",
    event => {
        if (event.key === "Enter") {
            searchResults
                .querySelector(
                    ".search-result"
                )
                ?.click();
        }
    }
);

toolDropdownButton.addEventListener(
    "click",
    event => {
        event.stopPropagation();

        const shouldOpen =
            !toolDropdownMenu
                .classList
                .contains("open");

        closeMenus();

        if (shouldOpen) {
            toolDropdownMenu.classList.add(
                "open"
            );
        }
    }
);

fileDropdownButton.addEventListener(
    "click",
    event => {
        event.stopPropagation();

        const shouldOpen =
            !fileDropdownMenu
                .classList
                .contains("open");

        closeMenus();

        if (shouldOpen) {
            fileDropdownMenu.classList.add(
                "open"
            );
        }
    }
);

viewDropdownButton.addEventListener("click", event => {
    event.stopPropagation();
    const shouldOpen = !viewDropdownMenu.classList.contains("open");
    closeMenus();
    if (shouldOpen) viewDropdownMenu.classList.add("open");
});

simulationDropdownButton.addEventListener("click", event => {
    event.stopPropagation();
    const shouldOpen = !simulationDropdownMenu.classList.contains("open");
    closeMenus();
    if (shouldOpen) simulationDropdownMenu.classList.add("open");
});

toolDropdownMenu.addEventListener(
    "click",
    event => {
        const button =
            event.target.closest(
                "[data-tool]"
            );

        if (button) {
            setMode(
                button.dataset.tool
            );
        }

        closeMenus();
    }
);

fileDropdownMenu.addEventListener(
    "click",
    event => {
        const button =
            event.target.closest(
                "[data-file-action]"
            );

        if (!button) {
            return;
        }

        const action =
            button.dataset.fileAction;

        if (action === "save") {
            saveProject();
        }

        if (action === "load") {
            loadFileInput.click();
        }

        if (action === "download") {
            downloadImage();
        }

        if (action === "print") {
            printDiagram();
        }

        closeMenus();
    }
);

document.addEventListener(
    "click",
    event => {
        if (
            !event.target.closest(
                ".custom-dropdown"
            )
        ) {
            closeMenus();
        }

        if (
            !event.target.closest(
                ".search-wrapper"
            )
        ) {
            searchResults.style.display =
                "none";
        }
    }
);

wireColorInput.addEventListener(
    "input",
    updateWirePreview
);

zoomInButton.addEventListener(
    "click",
    () => {
        const bounds =
            viewport.getBoundingClientRect();

        setZoom(
            zoom + 0.1,
            bounds.left + bounds.width / 2,
            bounds.top + bounds.height / 2
        );
    }
);

zoomOutButton.addEventListener(
    "click",
    () => {
        const bounds =
            viewport.getBoundingClientRect();

        setZoom(
            zoom - 0.1,
            bounds.left + bounds.width / 2,
            bounds.top + bounds.height / 2
        );
    }
);

centerViewButton.addEventListener(
    "click",
    centerGrid
);

runButton.addEventListener(
    "click",
    runSimulation
);

stopButton.addEventListener(
    "click",
    stopSimulation
);

clearButton.addEventListener(
    "click",
    () => clearDiagram(true)
);

savePropertiesButton.addEventListener(
    "click",
    saveProperties
);

loadFileInput.addEventListener(
    "change",
    () => {
        const file =
            loadFileInput.files[0];

        if (file) {
            readFile(file);
        }

        loadFileInput.value = "";
    }
);

canvas.addEventListener(
    "mousemove",
    event => {
        mouseGridPosition =
            gridPosition(event);

        if (
            mode === "place" &&
            armedComponent &&
            !running
        ) {
            componentPreview.style.display =
                "block";

            componentPreview.style.left =
                `${mouseGridPosition.x}px`;

            componentPreview.style.top =
                `${mouseGridPosition.y}px`;
        }

        if (
            mode === "wire" &&
            wireStart &&
            !running
        ) {
            updateWirePreview();
        }
    }
);

canvas.addEventListener(
    "mouseleave",
    () => {
        if (mode === "place") {
            componentPreview.style.display =
                "none";
        }
    }
);

canvas.addEventListener(
    "mousedown",
    event => {
        if (
            event.button !== 0 ||
            running ||
            event.target.classList.contains(
                "terminal"
            )
        ) {
            return;
        }

if (
    mode === "place" &&
    armedComponent
) {
    event.preventDefault();
    event.stopPropagation();

    const position =
        gridPosition(event);

    const definition =
        armedComponent;

    /*
     * Clear the armed state before insertion so no
     * secondary click can place another component.
     */
    armedComponent = null;

    const component =
        placeComponent(
            definition,
            position.x,
            position.y
        );

    componentPreview.style.display =
        "none";

    const inserted =
        autoConnect(component);

    setMode("select");

    if (!inserted) {
        setStatus(
            `${component.displayName} placed.`
        );
    }

    return;
}

        if (
            mode === "wire" &&
            wireStart
        ) {
            addWireCorner(
                gridPosition(event)
            );

            return;
        }

        if (
            mode === "select" &&
            event.target === canvas
        ) {
            clearSelection();
        }
    }
);

viewport.addEventListener(
    "contextmenu",
    event => {
        event.preventDefault();
    }
);

viewport.addEventListener(
    "mousedown",
    event => {
        if (event.button !== 2) {
            return;
        }

        event.preventDefault();

        panning = true;

        panStart = {
            mouseX: event.clientX,
            mouseY: event.clientY,
            panX,
            panY
        };

        viewport.classList.add(
            "panning"
        );
    }
);

viewport.addEventListener(
    "wheel",
    event => {
        event.preventDefault();

        setZoom(
            zoom +
            (
                event.deltaY < 0
                    ? 0.1
                    : -0.1
            ),
            event.clientX,
            event.clientY
        );
    },
    {
        passive: false
    }
);

document.addEventListener(
    "mousemove",
    event => {
        if (panning) {
            panX =
                panStart.panX +
                event.clientX -
                panStart.mouseX;

            panY =
                panStart.panY +
                event.clientY -
                panStart.mouseY;

            updateView();

            return;
        }

        if (
            !draggingComponentId ||
            running
        ) {
            return;
        }

        const component =
            getComponent(
                draggingComponentId
            );

        if (!component) {
            return;
        }

        const position =
            gridPosition(event);

        component.x = position.x;
        component.y = position.y;

        component.element.style.left =
            `${position.x}px`;

        component.element.style.top =
            `${position.y}px`;

        rebuildConnectedWires(
            component.id
        );
    }
);

document.addEventListener(
    "mouseup",
    event => {
        if (
            event.button === 2 &&
            panning
        ) {
            panning = false;

            viewport.classList.remove(
                "panning"
            );
        }

        if (
            event.button !== 0 ||
            !draggingComponentId
        ) {
            return;
        }

        const component =
            getComponent(
                draggingComponentId
            );

        if (component) {
            component.element.classList.remove(
                "dragging"
            );

            connectedWireClass(
                component.id,
                "dragging",
                false
            );

            /*
             * Existing components only rebuild their
             * already-connected wires.
             *
             * Do not auto-insert them into nearby wires.
             */
            rebuildConnectedWires(
                component.id
            );
        }

        draggingComponentId = null;
    }
);
document.addEventListener(
    "keydown",
    event => {
        const activeTag =
            document.activeElement?.tagName;

        if (
            activeTag === "INPUT" ||
            activeTag === "TEXTAREA"
        ) {
            return;
        }

        if (
            event.key.toLowerCase() === "r"
        ) {
            rotateSelected();
        }

        if (
            (
                event.key === "Delete" ||
                event.key === "Backspace"
            ) &&
            selectedComponentId &&
            !running
        ) {
            deleteComponent(
                selectedComponentId
            );
        }

        if (event.key === "Escape") {
            cancelCurrentAction();
        }
    }
);

/* =========================================================
   TOUCH / IPHONE CONTROLS
========================================================= */

let touchPan = null;
let touchDragComponentId = null;
let pinchStart = null;
let touchMoved = false;

function touchPoint(touch) {
    return {
        clientX: touch.clientX,
        clientY: touch.clientY
    };
}

function distanceBetweenTouches(touchA, touchB) {
    return Math.hypot(
        touchB.clientX - touchA.clientX,
        touchB.clientY - touchA.clientY
    );
}

function midpointBetweenTouches(touchA, touchB) {
    return {
        x: (touchA.clientX + touchB.clientX) / 2,
        y: (touchA.clientY + touchB.clientY) / 2
    };
}

componentLayer.addEventListener("touchstart", event => {
    const componentElement = event.target.closest(".placed-component");
    if (!componentElement || event.target.closest(".terminal") || running) return;

    const componentId = componentElement.dataset.componentId;
    const component = getComponent(componentId);
    if (!component) return;

    if (mode === "delete") {
        event.preventDefault();
        deleteComponent(componentId);
        return;
    }

    if (mode !== "select" || event.touches.length !== 1) return;

    event.preventDefault();
    event.stopPropagation();
    touchMoved = false;
    touchDragComponentId = componentId;
    selectComponent(componentId);
    component.element.classList.add("dragging");
    connectedWireClass(componentId, "dragging", true);
}, { passive: false });

viewport.addEventListener("touchstart", event => {
    if (event.target.closest(".placed-component") || event.target.closest(".terminal")) return;

    if (event.touches.length === 2) {
        event.preventDefault();
        const middle = midpointBetweenTouches(event.touches[0], event.touches[1]);
        pinchStart = {
            distance: distanceBetweenTouches(event.touches[0], event.touches[1]),
            zoom,
            x: middle.x,
            y: middle.y
        };
        touchPan = null;
        return;
    }

    if (event.touches.length !== 1 || running) return;

    const touch = event.touches[0];
    const synthetic = touchPoint(touch);
    touchMoved = false;

    if (mode === "place" && armedComponent) {
        event.preventDefault();
        const position = gridPosition(synthetic);
        const definition = armedComponent;
        armedComponent = null;
        const component = placeComponent(definition, position.x, position.y);
        componentPreview.style.display = "none";
        const inserted = autoConnect(component);
        setMode("select");
        if (!inserted) setStatus(`${component.displayName} placed.`);
        return;
    }

    if (mode === "wire" && wireStart) {
        event.preventDefault();
        addWireCorner(gridPosition(synthetic));
        return;
    }

    if (mode === "select") {
        event.preventDefault();
        touchPan = {
            x: touch.clientX,
            y: touch.clientY,
            panX,
            panY
        };
    }
}, { passive: false });

viewport.addEventListener("touchmove", event => {
    if (event.touches.length === 2 && pinchStart) {
        event.preventDefault();
        const currentDistance = distanceBetweenTouches(event.touches[0], event.touches[1]);
        const middle = midpointBetweenTouches(event.touches[0], event.touches[1]);
        setZoom(
            pinchStart.zoom * (currentDistance / Math.max(1, pinchStart.distance)),
            middle.x,
            middle.y
        );
        touchMoved = true;
        return;
    }

    if (event.touches.length !== 1) return;
    const touch = event.touches[0];

    if (touchDragComponentId) {
        event.preventDefault();
        const component = getComponent(touchDragComponentId);
        if (!component) return;
        const position = gridPosition(touchPoint(touch));
        component.x = position.x;
        component.y = position.y;
        component.element.style.left = `${position.x}px`;
        component.element.style.top = `${position.y}px`;
        rebuildConnectedWires(component.id);
        touchMoved = true;
        return;
    }

    if (touchPan) {
        event.preventDefault();
        panX = touchPan.panX + touch.clientX - touchPan.x;
        panY = touchPan.panY + touch.clientY - touchPan.y;
        updateView();
        touchMoved = true;
    }
}, { passive: false });

viewport.addEventListener("touchend", event => {
    if (touchDragComponentId) {
        const component = getComponent(touchDragComponentId);
        if (component) {
            component.element.classList.remove("dragging");
            connectedWireClass(component.id, "dragging", false);
            rebuildConnectedWires(component.id);
        }
        touchDragComponentId = null;
    }

    if (event.touches.length < 2) pinchStart = null;
    if (event.touches.length === 0) touchPan = null;
}, { passive: false });

/* =========================================================
   STARTUP
========================================================= */

requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        centerGrid();
    });
});
