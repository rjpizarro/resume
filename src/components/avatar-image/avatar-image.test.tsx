import React from 'react'
import renderer from 'react-test-renderer'
import * as Gatsby from 'gatsby';

import AvatarImage from './index'
import { render } from "@testing-library/react"
import AboutMe from "../about-me"

const data = {
  "placeholderImage": {
    "childImageSharp": {
      "fluid": {
        "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEyklEQVQ4y31UC1BUZRS+LGKG49gDmMZCTMWJiVDCNSLUtPCdOVI2OmNqwgzig2xwICtUFDERVxSHJNhwXYg1EhGQRy6g5fB2YVkaGQiIQOIt7rIt7O79Ovfe3XUZrTPzzTn3/8/5/vP478+wLAsOnJjNZpiMRl5b5VF/Px4NDPC2QacDLL6cGCcmbLFWHsa6aTKZYC8lMhmCly+HeMYMbPfywo61a7Flzhyc2bkTdUolxrVamy9rdwhPaLaQdWk0qCwoQEp0NBiG4TGb8CJhusV2IjxLWDlvHmQnTmCwu3tyhtbMKhQKuDs5QUTO0zgSBwd4OzriJbJnkO1CNrcmIjiTPZPWPw8KgnZw8MmSW6qq4GLJiCHn5ynoFbK5oKnWdTtMpX1u3d/VFeqKCthXyROGbtjAOzpRhpx+5ikkkwgJHiIRPEgfDAzEw74+IUsaJqOlKQa4uAgk5DTNUWQLFJEtmuJI2gKRg7BHGTrStyvZEatWCdO3lM1M6PXY7e0NB7sMvJ2m8M1/anZWUgsWU1W9LS22svmSjwQH82X4zXJD0v5t+OvOD6i6chL5iZG4cmQPkg9uR0rkDnws9sar5LfrbR9s8ZgFr+nOfFyJVCpcPbrDPGFpZia8aKO7nDZMKkBXTatqwTbUAfpaQf9ThwI6JDUkGHigxPHN7+E1iutsapqcYU9bK9xp437pJWDkLrrvylCbdQq91Vlge8tg6rmFsbZCqHPP4UGlHA0/S3i/iE3v4tMV7wt/DWVnm3J7gxq+zs5oU35PxzSilYg7ytOh/6MQ6L/Nk5p7lPi7JgvNNy7wBwD3ceiDpdj3YbDtt+WH0kHplqUcR0SgL9TXJNDknUd99mk05CSivSydJ0N/BUY0ubh3NQFN15NwJzUGupYbuBC6Gae3rkNDcd7ja1N6KYkCbkGZfBi5sXuRk5CAlVT+fr+3kH8uHvrWG8BYNVTXLkISEo7FtHd001aob8qRSYMabc5FnUKCvq4eoeS7Odk01TT01f2IqoxY/HrlImQxR5EdF4ffi9Koj3JUyeLwUHMNeWfjIf0yFt21lzGskaNGcQ7m3mKUJMfDoDcIhOOGcdyWpyP/dBTkkZ9hvOMmNPkpaPuF+mmsh+rqGZz9ZDW5NmJQlY3G62kYb5diqCkdY83H0FiShQ5Ni62Ptudr3DCB+pJS6t+3fDCGf0N/vYLPrlgSTZNN4icN8z0MNhVCKU0Gq28D++cZOrgdrNBEMPYPLP/qyGWokcfRnatBxXcxSNm/F7kSCS4fCqNel2NA9RNSQzdBGrEb2oF28lPT/TM+/vUELYjlOWbriorYspQTrLmziB1tvs7SvWQxdJtVKRLZr1f6s5UZsWxefCT7cHCUtcbDQsDgP+TUnn3Gj8QLjRlRIcarX4Uao7ZtNK529zCqcySUToORa0FfZ9cTcRzhGAfiH6Nfh7N1rTU15nW+vghYthxLX38DK+Z7IiAgEEvfXIzM6BB62otQcvEkS33XWWOtPByhqxXakRE30s99s2aNT5Cb24H1s93D1s6bG77Kc/7ejXM8wpa94BK+y2t+hPJ81BeHg4L8yHemdnjIzZ6DeZq8vGDB3EX+/rsWicXHCOGE9QvF4gO+S5Yc8Hwn0If5H/kXtiLecIlPeIwAAAAASUVORK5CYII=",
        "aspectRatio": 0.8888888888888888,
        "src": "/static/984bdb4dc958d8894ef1f33727a57898/e93da/avatar-face.png",
        "srcSet": "/static/984bdb4dc958d8894ef1f33727a57898/69585/avatar-face.png 200w,\n/static/984bdb4dc958d8894ef1f33727a57898/e93da/avatar-face.png 351w",
        "sizes": "(max-width: 351px) 100vw, 351px"
      }
    }
  }
}

beforeEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => (data));
});

afterEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => {});
});

describe("Avatar Image", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<AvatarImage />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should call useStaticQuery", () => {
    render(<AvatarImage />)

    expect(Gatsby.useStaticQuery).toBeCalled()
  })
})