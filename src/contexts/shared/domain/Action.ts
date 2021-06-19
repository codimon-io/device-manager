abstract class Action {
  abstract execute(): Promise<void>
}

export default Action;
