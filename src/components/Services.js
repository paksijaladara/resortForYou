import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaWifi } from "react-icons/fa";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: "Free Cooktails",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaWifi />,
        title: "Free Wifi",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services For You" />
        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
