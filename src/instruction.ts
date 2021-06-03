export type Instruction = MoveInstruction | TurnInstruction;
export type TurnInstruction = "r" | "l";
export type MoveInstruction = "b" | "f";

export const BACKWARD: MoveInstruction = "b";
export const FORWARD: MoveInstruction = "f";
export const RIGHT: TurnInstruction = "r";
export const LEFT: TurnInstruction = "l";
