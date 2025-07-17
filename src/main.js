import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import jQuery from "jquery";
import { popper } from "@popperjs/core";
import { Chart } from "chart.js";
import Datatable from "datatables.net-bs5";
import DataTables from "datatables.net";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"; // or "./css/sb-admin-2.min.css"

import $ from "jquery";
import "bootstrap";
import "jquery.easing";
import DataTable from "datatables.net-bs5";
import "datatables.net";
import { Chart } from "chart.js";

$(function () {
  $("#dataTable").DataTable({
    ajax: {
      url: "https://ex1new.onrender.com/get-data",
      dataSrc: "", // Use "data" if your endpoint returns { data: [...] }
    },
    columns: [
      { data: "id", title: "ID" },
      { data: "name", title: "NAME" },
      { data: "enrollid", title: "ENROLLID" },
      { data: "created_at", title: "CREATED_AT" },
    ],
    responsive: true,
  });
});


setupCounter(document.querySelector("#counter"));
