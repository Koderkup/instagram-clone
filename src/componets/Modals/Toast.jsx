import React from "react";
import { Button, useToast } from "@chakra-ui/react";

function ExampleToast() {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Успешно!",
          description: "Операция выполнена успешно.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right", // Можно выбрать "top-left", "bottom-left", "bottom-right"
        })
      }
    >
      Показать уведомление
    </Button>
  );
}

export default ExampleToast;
