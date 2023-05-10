import { Layout } from "antd";
import { styled } from "styled-components";

export const LayoutStyles = styled(Layout)`
  header {
    text-align: center;
    background-color: #f4f4f4;
    margin: 20px;
  }

  section {
    main {
      min-height: 120px;

      .pokemon_card {
        display: flex;
        justify-content: center;
        margin: 10px 0;

        .card {
          width: 90%;
          max-width: 250px;

          @media (max-width: 767px) {
            width: 100%;
          }

          .card_name {
            text-align: center;
            text-transform: capitalize;
            font-weight: bold;
            font-size: 18px;
          }

          .card_types {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .grass {
              background-color: green;
            }
            .poison {
              background-color: violet;
            }
            .fire {
              background-color: red;
            }
            .flying {
              background-color: #87ceeb;
            }
            .water {
              background-color: #00ffff;
            }
            .electric {
              background-color: yellow;
            }
            .bug {
              background-color: #b0dea3;
            }
            .normal {
              background-color: grey;
            }
          }
        }
      }
    }

    .pokemon_info {
      background-color: #f4f4f4;
    }
  }
  footer {
    text-align: center;
    background-color: #f4f4f4;
  }
`;
