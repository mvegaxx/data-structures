export interface ISolution {
  problem: number[];
  solution: number[][];
  statesTested: number;
  success: boolean;
  target: number;
  reason: string;
}

export interface IState {
  path: number[];
  rest: number[];
}

/**
* Given an array of integers, return true if it can be partitioned
* into two arrays in such a way that the sums of both arrays are
* equal. 
*/
export const solve = (a: number[]): ISolution => {

  // counter for output, not part of the algorithm
  let statesTested = 0;

  // first find the sum of the array
  const arraySum = a.reduce((p, c) => p + c, 0);

  // to solve the problem, we need to find some
  // partition with a sum of half of the original sum
  const targetSum = arraySum / 2;

  // convenience function for fail reasons
  const fail = (reason: string) => {
      return {
          problem: a,
          reason,
          solution: [],
          statesTested,
          success: false,
          target: targetSum
      };
  }

  // if the problem array has less than two members, it cannot be solved
  if (a.length < 2) {
      return fail('Array is too small to partition.');
  }

  // if the problem array sums to an odd number, it cannot be solved
  if (arraySum % 2 !== 0) {
      return fail('Array sum cannot be divided equally.');
  }

  // if any member of the problem array is greater than half of its sum, it cannot be solved
  if (a.some(e => e > targetSum)) {
      return fail('Array contains a value greater than the required partition sum.');
  }

  // we're going to step through the tree of possible solution
  // states. all values begin in the 'rest' array, and are
  // progressively moved to the 'path' array as we move through
  // the search space.

  // init the stack with the root state of everything-in-rest
  const stack: IState[] = [{
          path: [],
          rest: a
      }
  ];

  
  // keep popping states from the stack until it's empty
  while (stack.length > 0) {

      const state = stack.pop();

      // (this will never happen, but Typescript likes to
      // be safe about potentially-undefined values..)
      if (state === undefined) {
          throw new Error('Internal error - state is undefined.');
      }

      // calculate the sum of the path for the state we
      // just popped
      const sumForCurrentState = state.path.reduce((p, c) => p + c, 0);

      console.log("sumForCurrentState", sumForCurrentState)

      // not part of the algorithm
      statesTested++;

      /// expo:  show all staks
      //console.log("soy stak", stack)


      // if the sum === the target sum, we found a solution
      if (sumForCurrentState === targetSum) {

          // at this point return the solution. we could store it
          // instead and continue if it was desirable to find *all*
          // possible solutions
          return {
              problem: a,
              reason: 'Partitioned successfully',
              solution: [state.rest, state.path],
              statesTested,
              success: true,
              target: targetSum
          };
      }

      // if the sum of path is less than the target value, a
      // solution is still possible as a successor of this state
      if (sumForCurrentState < targetSum) {

          // generate the successors to this state and push to the stack
          // to be evaluated. all will have an additional different value
          // having been moved from rest to path
          stack.push(...getSuccessors(state));
      }

      // a possible additional check - if every value in rest is
      // greater than the difference between sum(path) and target,
      // there's no need to generate successors for this state..
      // needs testing to determine whether the overhead pays off
      // in practice
  }

  // if we got here without returning yet, we exhausted all
  // possible states that could lead to a solution, so admit
  // defeat
  return {
      problem: a,
      reason: 'No solution exists',
      solution: [],
      statesTested,
      success: false,
      target: targetSum
  };
}

/**
* Given an array and a value, return a new array containing all
* members of the original array except the first instance of
* the given value.
*/
export const removeFirst = (v: number, arr: number[]): number[] => {
  const newArr = arr.map(m => m);
  const index = newArr.indexOf(v);
  if (v >= 0) {
      newArr.splice(index, 1);
  }
  return newArr;
}

/**
* Given an IState, calculate an return an array
* of all possible successor states, transferring
* a different member of the rest array to the
* path array for each.
* 
* For example, given [1] and [2, 3], the successor
* sets will be {[1, 3], [2]}, and {[1, 2], [3]}
*/
export const getSuccessors = (state: IState): IState[] => {
  
  const successors: IState[] = [];
  
  for (const v of state.rest) {
      successors.push({
          path: [...state.path, v],
          rest: removeFirst(v, state.rest)
      });
  }

  /// expo: show paths
  // console.log(successors)
  return successors;
}

const set = [15, 5, 20, 10, 35, 15, 10]

const set2 = [15, 5, 20, 10, 35, 15, 10, 1, 3, 10 , 2, 7 , 18, 29, 30, 2, 5, 2, 2, 1, 1, 3]

console.log(solve(set))