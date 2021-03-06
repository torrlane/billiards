import "mocha"
import { expect } from "chai"
import { Ball } from "../src/ball"
import { Table } from "../src/table"
import { Cue } from "../src/cue"
import { Vector3 } from "three"
import { zero } from "../src/utils"

let t = 0.1
describe("Cue", () => {
  it("no intersection with cue ball", done => {
    let a = new Ball(zero)
    let b = new Ball(new Vector3(0, 1, 0))
    let table = new Table([a, b])
    table.advance(t)
    let cue = new Cue()
    cue.setCueBall(table.balls[0])
    cue.moveToCueBall()
    expect(cue.intersectsAnything(table)).to.be.false
    done()
  })
})
