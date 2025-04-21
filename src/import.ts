import {
    PlaydateButton,
} from "@crankscript/core";

export const isAButtonPressed = () => {
    return playdate.buttonIsPressed(PlaydateButton.A)
}