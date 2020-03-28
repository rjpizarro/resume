import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import * as Gatsby from 'gatsby';

import AboutMe, { getExactYearsOld } from './index'
const RealDate = Date;

const data = {
  "argentineFlag": {
    "childImageSharp": {
      "fixed": {
        "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAAAv0lEQVQoz2MoWXOfbMRAkebi1fdxo3tghFMBQ8W6B1hR+dr7lRseVqwHMXCpYXj07gcO9PPG7Xs3bt99iFPBD4b/mODfPyDx9fmNO8sC7i7z//L0KlwQDTD8+fsPDf3+8weo8MnF3Zf7RS71CTw+vxPIBQpiqsRm83+QJf9+fnp9csGrEwuADLggus2LTrzChl4uPvlm8ekPIHTyDZCLVRlD5rK72NHSO1lL72RCEA41DGVrH+BG98EIpwKKUhgAk80m5V4vbosAAAAASUVORK5CYII=",
        "width": 45,
        "height": 28,
        "src": "/static/879f15ad327fd1658a9a8a173283652d/4c61b/argentina-flag.png",
        "srcSet": "/static/879f15ad327fd1658a9a8a173283652d/4c61b/argentina-flag.png 1x,\n/static/879f15ad327fd1658a9a8a173283652d/bff21/argentina-flag.png 1.5x,\n/static/879f15ad327fd1658a9a8a173283652d/8099b/argentina-flag.png 2x"
      }
    }
  }
}

beforeEach(() => {
  window.open = jest.fn()

  const beforeBirthdayDate = new Date('2020-03-25T12:00:00Z')

  global.Date = class extends Date {
    constructor(date) {
      if (date) {
        return super(date);
      }

      return beforeBirthdayDate;
    }
  };

  Gatsby.useStaticQuery.mockImplementation(() => (data));
});

afterEach(() => {
  global.Date = RealDate;
  Gatsby.useStaticQuery.mockImplementation(() => {});
});

describe("About Me", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<AboutMe />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should call useStaticQuery", () => {
    render(<AboutMe />)

    expect(Gatsby.useStaticQuery).toBeCalled()
  })

  it("should call window.open with arguments on LinkedIn Icon click", () => {
    const { getByRole } = render(<AboutMe />)

    fireEvent.click(getByRole("button"))

    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith("https://www.linkedin.com/in/rjpizarro/")
  })
})

describe("getExactYearsOld", () => {
  it("returns the years and exact days since 1988/04/13 compared to a date from 2020, before 04/13", () => {
    expect(getExactYearsOld()).toBe("31 years and 346 days old")
  })

  it("returns the years and exact days since 1988/04/13 compared to a date from 2020, after 04/13", () => {
    const afterBirthdayDate = new Date('2020-04-18T12:00:00Z')
    global.Date = class extends Date {
      constructor(date) {
        if (date) {
          return super(date);
        }

        return afterBirthdayDate;
      }
    };

    expect(getExactYearsOld()).toBe("32 years and 5 days old")
  })
})