import React from "react";
import { Dropdown, Pipe } from "./style";

const Brand = () => {
    return (
        <Dropdown class="dropdown">
            <div className="pipes">
                <Pipe opacity={0.25} />
                <Pipe opacity={0.5} />
                <Pipe opacity={0.75} />
                <Pipe opacity={1} />
            </div>
            <button
                class="btn btn-link dropdown-toggle btn-sm d-flex align-items-center col-auto"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <h1>STUDIO 813</h1>
            </button>
            <span>Adalberto Teixeira</span>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a class="dropdown-item" href="#">
                        Site
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Profile
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Logout
                    </a>
                </li>
            </ul>
        </Dropdown>
    );
};

export default Brand;