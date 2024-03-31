import Button from "./Button.jsx";

export default function DefaultButtons({style}) {
  const glass = style === "glass";
  return (
    <>
      <legend>{glass?'Glass':'Default'} Styles</legend>
      <Button type="primary" glass={glass}>
        Primary
      </Button>
      <Button type="secondary" glass={glass}>
        Secondary
      </Button>
      <Button type="danger" glass={glass}>
        Danger
      </Button>
      <Button type="warning" glass={glass}>
        Warning
      </Button>
      <Button type="serious-warning" glass={glass}>
        Serious Warning
      </Button>
      <Button type="light" size="medium" shape="round" glass={glass}>
        Light
      </Button>
      <Button type="dark" size="medium" shape="round" glass={glass}>
        Dark
      </Button>
      <Button type="success" size="medium" shape="round" glass={glass}>
        Success
      </Button>
    </>
  );
}
