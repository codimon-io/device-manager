abstract class Action {
  abstract execute(data?: any): Promise<void>
}

export default Action;
