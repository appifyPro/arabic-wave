import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./homepage.css";
export default function Table() {
  return (
    <section className="table-sec center">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Personal</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition">
            <td>Customized Course Journey</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Best-In-Class Activities</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Projects and Assignments</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Exceptional Student Support</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Women Privacy</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Recorded Sessions</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>Free Learning For Needy/Poor</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
          </tr>
          <tr className="transition">
            <td>No. of Studentsin Live class</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="darkred" />
            </td>
          </tr>
          <tr className="transition">
            <td>Choice of Teacher</td>
            <td className="num">1</td>
            <td className="num">4</td>
          </tr>
          <tr className="transition">
            <td>Timetable Selection</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="darkred" />
            </td>
          </tr>
          <tr className="transition">
            <td>One-on-One Interaction</td>
            <td>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="#F49D1A" />
            </td>
            <td>
              <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="darkred" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
