import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby';

import SkillsSetGrid  from './index'

jest.mock('@material-ui/core/Grow', () => (props) => <div>{props.children}</div> )

const data = {
  "skillImageSet": {
    "nodes": [
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEKElEQVQ4y2WUa2gcVRTH9xHRuGldSQVr0pLHzkw2G6qY1tS0JYjFtNnZR92QVNOsSakroZgYGotiSouiWEWxERs/CH4RG1pjqR+UYsF+EK02IK0aTEGT7sw+Z83OPrObmbnHM7OTzQYv/OaembnnP+eec88YDOvDqM+XkNeQr5GLCCCXkV+R88gNZBZ5V19vMlQOzkVrc7XZaNJVv0PyyJ17TcYmnOfuMRkcOF9HckgUmUW+wffNXQ/dXwXw5wYtA7u1pvIbp5Bu5AzyIPI2UoucRnYgo8gEcg35ZM2pc0v1xghjHsa0xFJWeHlXDQw/tgle6bDEPLQVRp+wJLyMFUbaa+BkpwXGOyyaffbpajix2xJy0dYgS5nLWryL0oWpzbyLvsOxVB5fJDkXk0LEyjmoo9ksLeLaNK4VOJZu1gWNBp4tCfJOm2ovJr0tEGJtEOlpRJrKiAPNkPLbIDWogvYLNKT9dkDRHPrVahosZdTCLIu66J8SHhp43w6J9+9R+CO7Ff75DoUf6FBS43uVzMReJX0CmdinZMba5fRQC3BO+p+Ij67W/UsXTlVWH3jsV5Ld9RA+E5AEIUHiIQ7iiQQIiKIQUAeRZW0uXDorZ3sfAc7dOpcfazOVIqS13KlG6YHX/lnqwDYInXxOEvJFEl/4A6LXv4XYj99Dcf4GSAu/gDT/M0iLv5PcuRelfN924Fz2q1r+WNqo1UMXNOsRvpNlGyA0cnBVyOYheuE8BB81Ate5Gf51b4LkoRLL3hpIDTdKRb8Dgj3Ul3r+zFqVcbtqHqt0wfGsuxn44a7VeIgnsVs3ITw1CZHpNyF38T1Y+ep9WJn9EPmAZF7dt1o8TEHQyUzpEVaF3LbyWdQjbBlMum3AH26X43cXiSABCApAAtNXymB5kOxpp5TzNUGQtU/qBalaO3/qjVl/eDDmxiq7GQXzSMKTw6Bx6ihkpo5D7lwA5MjfQFayJD26U077tAgDJV/KvHam1RuTLrgTIfyBBojMTJPo1Vng9tcD17UFlvu3QrKvFmRuAZRUgogBh7L8LK0KenVfc7l5UbB0bNxMA1IIdW9XK0uw0hB+awT4/nYQj++C3EfHgBTyIAfniXiUUYRDDG6ZeVLfqalCkF4TtPLuluXIM9sgOvOpIhRkEIpIcAlkMVFO4Opv10hysElNDXYKw+h1qBQsd8p9yF9RFwV83+Ny+I0hEvniYxK/PUek6BIp/nCB5KbHIDOxRxGHVDE6gevrKoPaIFgqP3W70Is92tNEuP11MvfUw5JaJDHQpqQG6yRxoF5K+m1k1d+q9nEi5KEfqExb+RfG6+2H9kto38QvZkVfK6R7HaBWXjzCwIq/DTL9DuBdTJFzUrdwzeuct/y3MvxvaL24ntdGvB/AD3yO9l3cXgS7YgY5hjazwc+17vcfJEuyVwX1nsEAAAAASUVORK5CYII=",
            "aspectRatio": 1,
            "src": "/static/28bccbe5fb844f30d370f480cf552f34/0b2a1/01_html.png",
            "srcSet": "/static/28bccbe5fb844f30d370f480cf552f34/392a1/01_html.png 25w,\n/static/28bccbe5fb844f30d370f480cf552f34/07e7f/01_html.png 50w,\n/static/28bccbe5fb844f30d370f480cf552f34/0b2a1/01_html.png 100w,\n/static/28bccbe5fb844f30d370f480cf552f34/ea52d/01_html.png 150w,\n/static/28bccbe5fb844f30d370f480cf552f34/daa7d/01_html.png 200w,\n/static/28bccbe5fb844f30d370f480cf552f34/177e9/01_html.png 230w",
            "sizes": "(max-width: 100px) 100vw, 100px",
            "presentationWidth": 100
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQ4y42Tv0rDUBTGk7QgVOmgizgLjlqhi0t1FUHBQdHBZFS6dqjaFMGir6CDLlpEHHSsrr5Ch+RRchd/Nzk3va0pGvg4/79zcu+5jmN9QawyGSnHj5ORP1IeMc+y87gvNVM/nWw1WAOLxvYjtQRBLbf/JCPBTILcA7cU9cA2jXawr9FvgjjZzZonXiEpCbq7TJGUhPCS36rI1G/EXyU+B8mF6GUzKfqI0BgUueZsaHIO9iFugneKPiBuIrWvLRNqMnfyqHIykRWSTsEzGFDcBxsaxPr4Pmn0BM7QZ+1a6yIS+xw7JDZAVQjXKfgONLgQ5ABUQQN/aA1kTWetCHqP7jVZFaZRqyQP8Q9THR+6J+S9ou0wk7lCOI/eAg8QfUFwj16nSR37LsgIH0ELe0H+0HUKFzoeBSAK8fvIbnohXAzoghPIrqw812zK2C8H+e2qsnRto1ek6AWYtZkhV9Ymy9Xn5//6ZRwpzGJH6gB0sn1UxxQc0kRfWAiOhKiUPgZ7B6c9vSxRbSFXrNgy9qad8693PHlj8sS84nMfz/0BFyCKnKIAc38AAAAASUVORK5CYII=",
            "aspectRatio": 1.4,
            "src": "/static/638be90904f9f9248d3c69cb2992c562/0b2a1/03_react.png",
            "srcSet": "/static/638be90904f9f9248d3c69cb2992c562/392a1/03_react.png 35w,\n/static/638be90904f9f9248d3c69cb2992c562/07e7f/03_react.png 71w,\n/static/638be90904f9f9248d3c69cb2992c562/0b2a1/03_react.png 141w,\n/static/638be90904f9f9248d3c69cb2992c562/ea52d/03_react.png 212w,\n/static/638be90904f9f9248d3c69cb2992c562/daa7d/03_react.png 283w,\n/static/638be90904f9f9248d3c69cb2992c562/05ed8/03_react.png 1280w",
            "sizes": "(max-width: 141px) 100vw, 141px",
            "presentationWidth": 141
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAACuklEQVQ4y42V22/MQRTHZy+ttlYqIUSiCYqUuqSq7hTtRtFa2VqRaktQl7i3NPFA+qLBS9/66JngiaCJ/2N+kTQkEn/GjO+c+e7+LvsjNvlkzsw5vzNnzpw5q5T7aaP8aJUKrIr9tM3KelVO/kJdiiKoKbvBIWxUkHlgM5jnqGsA+73+X86qu2tzDvJDUAbPwFDEzjmZAefBdXCN65m403CnJWA6su4MJ8AlUAJToCWinwar66MMHa4Ctyk34qg8ppnHfCFi38LxFnQbaZNJc7gC3E2kox8Mgh4wmtDdAe3xCN0Na5ONGN1HZNsx7gDIp/mK8SqogE/gBtgF1oNJkOfFZZPHbsfHFzF+wPjSO7PvYdgL1gGndxu9BVfAY/BZLkabbclbdkl/AraA46DIKMo8RRfkw5T3MAWdYAS0+csy93xpaTMKYSxRQs+x/qq22aK16hfQdpZrU7yo1sh3JyQFUlfhYjNH1JqZpLygfsPZojj8wXwNQH7NiF01NNJ2VjHs8UTtIUJbjXBEfYezn+JwhmvuMualKsLvToIHyRxuAkexaz+f3zD1HTL38j7oB2k7DtaCR1JC7omqoNYYaGBwy/YFOAPewQgb2A1gM0vpDbjMKL/4MjKd6e84PM5ORliRHAZSh8PgI7jJIm9jZE3MJeswsNGXslJCj5dUnzQIbbskNXGdi66jlvv/eMt5ynPgW0o1uMi3/t1hgPCj3cbrxthxyr6tmeZ4tzFr4m85sNWunIv3Q1NiP6xEHBwJ+6GZkJ6Y2g/r23o3P15ap3Np0HavlE/q34Hred5BKyNtCA3McoCWZpqk7wXWzXN0XIBtIXLDee5olmHylLk6Cw4C13V6wQEYH2Nu5/gailI6rgtpc9rbSGcqVh0W/MdmiHU3wNs7BVy72s1jlqi/wJrs4aYldp8+5+4PfdCbAXOpaHMAAAAASUVORK5CYII=",
            "aspectRatio": 0.88,
            "src": "/static/248cb156cf25bd359ef4705fb4306762/0b2a1/04_react-native.png",
            "srcSet": "/static/248cb156cf25bd359ef4705fb4306762/392a1/04_react-native.png 22w,\n/static/248cb156cf25bd359ef4705fb4306762/07e7f/04_react-native.png 43w,\n/static/248cb156cf25bd359ef4705fb4306762/0b2a1/04_react-native.png 86w,\n/static/248cb156cf25bd359ef4705fb4306762/ea52d/04_react-native.png 129w,\n/static/248cb156cf25bd359ef4705fb4306762/daa7d/04_react-native.png 173w,\n/static/248cb156cf25bd359ef4705fb4306762/79a44/04_react-native.png 1001w",
            "sizes": "(max-width: 86px) 100vw, 86px",
            "presentationWidth": 86
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQ4y2NgGPLAzcMWQrvbAtl2KGJ4NNnBaXdvCLvjgBdD93EvBld3iGZXiIGM6IaD1PSc8IZjsG1u7nADmdy9IJq6jnoxdh/zYoKKM7p5QtS4Ag0CqXN0sGX4//8uRB3Q0G6Qgce9GeAuABrKCHNxaqMzE4wdmePIAnWhCdCgRFS/SWP3squHLSNUk76Hj50KiN1+wEuy65iXFlyNu20vEM8CsR1sbWysTWy4oD6RA3pVAOhKdiDNBHIZzFu2QHzLxcX2WEKls1nfGe+Lfad9/vef93ZysLOdBvTyC6B8O9DQbN9Q+69Adtfsp74KQAMTgYZlAA0Th4cblE5x97TLcnK0bQB6M3bCee97028E/u877e0PNHAN0MBrQDWlrm62rQHR9meAbNVJl320gOGcATQwH2igMGoMu9tyA9lsPiH2QK/IMgFdqAO03R2qRh5kIdB17MBI4wJaGm5lbM31/38FI1CNJsx14FiGJQPcQIPoNAuKadR05glOEgz2NjYM/ee8GYGRwnThfziDs7MtI1Cc2Q2SZECY2c7KhmH9/0BwsumBJZmRCQA+J6RqEJoqaQAAAABJRU5ErkJggg==",
            "aspectRatio": 1.36,
            "src": "/static/3b1670d8a69fb610cde8165ffdae0774/0b2a1/05_node.png",
            "srcSet": "/static/3b1670d8a69fb610cde8165ffdae0774/392a1/05_node.png 34w,\n/static/3b1670d8a69fb610cde8165ffdae0774/07e7f/05_node.png 68w,\n/static/3b1670d8a69fb610cde8165ffdae0774/0b2a1/05_node.png 135w,\n/static/3b1670d8a69fb610cde8165ffdae0774/ea52d/05_node.png 203w,\n/static/3b1670d8a69fb610cde8165ffdae0774/daa7d/05_node.png 270w,\n/static/3b1670d8a69fb610cde8165ffdae0774/f2e1b/05_node.png 423w",
            "sizes": "(max-width: 135px) 100vw, 135px",
            "presentationWidth": 135
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQ4y32Uy0tUYRTAzx1tGlqIFERQBCVaUjRGLrJamOSimB5UaBaJUVHSIlpkUZItIgoqpJczTrPoSVjhon+gP6AgCgoXljOOhtEmiFbR7Xeu5xuu8+iDH9+55/Wd73GuCGNSUpKVpIrBrORgQoYiprsMV1RG52HznJ+L0RyF4Qya5IvcD+TPctvpNv2Ux/4veerj16a6l9IX2MbxzYWSzhm5kMKX7zIlwxGceuARvIV38ASO5iVVXSm2kH1c7jn5FnyADOyC81olbEDuhwQ8gPdwV2M+yuDcCt1HXobnIU/4Mqrb68lJKsY8GPK7SeJa5k5fXqnPDGc3v2TLudlL8cywB0ZNvgFNoYSNbgHmEegyOVKybVby7Dwa4Fh2dosDFlClmHwBNkI3MfFwbFHCpEtYBwMEXGdeZrpqxeQl2K7BJRKtKZuQGw3KtoAWPUdolwoD2xb1wXer23K+3DskcTXy2G95pgeeJqAb+uCcobI+pSF7l1mqi5Zcin58soeM/BCm4Q2XdZWbXzcl6XoWq0dei06f0WvseXheXJSUU+hT4DsKvXARzhin4LCeZ94qq9AlqaAXS65+1jnxR0b8v/JCt7i7jD1cSEHphdvIfg6e/gjMPqhdMS1p1aktMiZ3nH+gKyT/aj8D7YrJoh793/hGcs7VK7ttfSrQRcI6Kz3KAjVauc+vAtsCvmthu/nXwAHYDyvRN1tRnhpjcIgbXMiWajUxhjhJ25F3Qlsu6OvkNvSnTbcP+yotAPk4+h22UMQl7IA4aECndoguQsBJnaEJzhK4mapbkU9ga4TlyEdgr1VY5bbcbIHtOK3GsBj5ILNW16u9DeuxNVivr4AE9IP6d/CMWtlhRNwNTbrsNn5IxulbYFG5iyHZUmwxlWckE8T/A+kqzekr9T+TAAAAAElFTkSuQmCC",
            "aspectRatio": 1,
            "src": "/static/e4b4d327c1f9ae209a9c19ac03313799/0b2a1/06_graphql.png",
            "srcSet": "/static/e4b4d327c1f9ae209a9c19ac03313799/392a1/06_graphql.png 25w,\n/static/e4b4d327c1f9ae209a9c19ac03313799/07e7f/06_graphql.png 50w,\n/static/e4b4d327c1f9ae209a9c19ac03313799/0b2a1/06_graphql.png 100w,\n/static/e4b4d327c1f9ae209a9c19ac03313799/ea52d/06_graphql.png 150w,\n/static/e4b4d327c1f9ae209a9c19ac03313799/daa7d/06_graphql.png 200w,\n/static/e4b4d327c1f9ae209a9c19ac03313799/117a6/06_graphql.png 600w",
            "sizes": "(max-width: 100px) 100vw, 100px",
            "presentationWidth": 100
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACG0lEQVQ4y5WTXUsUURjHZ1dtDbyJTAqNwsRd2Xbn7JoRXgUR7UxtgoQSkjdloHSh6ThdRNoLWYRiSVeSQdDLTV0Eiu2Ziu5DkD5B9AX6BtNvZs/kuLujdeDP83LO8zvPeWZX02qsacPxrWXKeNWe6cRCvrbrCg5ZphMvx/IIuQfEC1xgVkL/aVlGuQB7GOA7ACbqQMtA+xU0vmuX3iYFXld1Kr6PzoX26y1Dvp02ZEMwGr/GkDW7UsDgkFOPfQacLp2HaAj1ABnYmrVUL5HRswvmA3BvGegcw9+k88f4NsWLQK+HoDs+OaZsF5pE8xQfrTiTQTPk54KayA7/PsF0loh1igrYp3SXUN2MM4Lf6us/Qn3hD1QBlGqWch8HnqjfYYttfnGJB1W8jD+mIIKLZyOBllFS4M88obRys7Dapi5oIbcfu4Ds0ItG0Ljy66qA7i/Xg/k33Sl+7711/tvLKePTBJpCb2zz61W6vYxvIT5OaXGi8LHJOz9prFXPMJ3tLIN/ulpTu3bgQu+omClunJktbp5yXdffGz37KkOucPfij3xQN3R6rva/Rgjh2+PZVIMQudcZPb3SlmrsOZjUkh3pQ8050f28K9N+SYtpja2pRJrzqe7cyVavJi9ORAOxe3RdX8W+B+wgz/9A7gV2PSfy8+SW8DfIJVVNbCdgAl1BgxTcRsOeiG00gu6ha+gGykYCw9D/WVy2Lf4D/kv8Gk87oIsAAAAASUVORK5CYII=",
            "aspectRatio": 1.28,
            "src": "/static/4912f6d800e1b75354e0b5d4794e1856/0b2a1/07_redux.png",
            "srcSet": "/static/4912f6d800e1b75354e0b5d4794e1856/392a1/07_redux.png 32w,\n/static/4912f6d800e1b75354e0b5d4794e1856/07e7f/07_redux.png 64w,\n/static/4912f6d800e1b75354e0b5d4794e1856/0b2a1/07_redux.png 128w,\n/static/4912f6d800e1b75354e0b5d4794e1856/ea52d/07_redux.png 192w,\n/static/4912f6d800e1b75354e0b5d4794e1856/daa7d/07_redux.png 256w,\n/static/4912f6d800e1b75354e0b5d4794e1856/f7526/07_redux.png 312w",
            "sizes": "(max-width: 128px) 100vw, 128px",
            "presentationWidth": 128
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADU0lEQVQ4y82U2U9TQRTGbwFxQ8UldQlGiZaCNCql7S2gQGmLQGkpuNNbwIBGcDem7QUSF4y7IKWuCLJLjGuiUcSY+GBijFsw+qCJPpj4F/iAmnD9Zphbr9u7k/xyzpk555tzz6TluP9+5esTuEJDIuc0/qQQkCXH2br5co7KqTgje8q8fy6XKYkWK2Pl+u1M9cc+uoxEEOswaCNgpygS1IUGbRTxC1ITohDPUJ45UrXRzJ8croMzDxwEO4AfHAApIBWsBT7mN4IGsAaYwDpwEmQBFxCBnghOJUWujEVJsNUsoQwcRsfj2SWkoBYkMFsBNoF0dm4AZlBPBhvn5BP3OjQL+cLRLt1gg4tPcmM+24C7iF+0BHsnQCbpEntp4CFw4cziNFHREpDMOW3JE/I49cQ1x7KWFZt101xLtLH6uBkxZBzm+Nmz5Jk5UhPUq5ctVuPSyfkpms02XbwxL0VTz8+fFQ9/Qkm6bmb41coHi9PW3ljxPbePryLxuROV6mafR3v5+JY5IdG7NFTrTVa+cmVBWmV5rrFhx2pLSbOvVC/v1xQvj+Sm7IqKXHXVPuS5WyDZLxmH0zuXxvdu37igRRSetASER2A9aAJPgZUUth2osp6uLXt3pq7sKC7ch/0XQb9n9FJ7jznHfd0irbxiHc67bJZyW03HyX5QFBqR2CXfDt8LvkBgHotfQYReEAoIjxE30kRrt2lr0a1syd2f/TW3k5ds542PmOApdNnFiscwOwTqmf8S+EAGGAQaKmjpMlQ7biyXnH2Zw/Z2k2Q9a5AFm9FNN+1A9EYzkTtyJ0yQjKIKvAV7qGBmR4rO3mseye/J+GbvMEk5IcORcIcBoZ0JqpjIGzJT5j8LiYKF+dngK5hORW19fJPrZqaUFdR/zj/Fz6VJonABs7mvmOFucFsRfyBzZX4NePzLD35Pf8VV4VyBjfhNdZ7EUMA7gKTn4BCZG9gFxrJHIA/0Gp1fg60DDWAOFQo92B9B7Mj7TxpJkuintYqVUc3+UvaZnkkoHKPoTCXPFHYciFGeUSdwq2rU2cmpPnb2//UvDckRIBy3NtSEfTLjsNj9gTZqB2EH7l2k/un6Cq7FL3BBXylFFmrxezhxcwbm6+WC/lIiRGGi1P4AisBwRyNkgwkAAAAASUVORK5CYII=",
            "aspectRatio": 1,
            "src": "/static/bca7dfdc5274e4cf0eb951adaa1e4993/0b2a1/09_mongo.png",
            "srcSet": "/static/bca7dfdc5274e4cf0eb951adaa1e4993/392a1/09_mongo.png 25w,\n/static/bca7dfdc5274e4cf0eb951adaa1e4993/07e7f/09_mongo.png 50w,\n/static/bca7dfdc5274e4cf0eb951adaa1e4993/0b2a1/09_mongo.png 100w,\n/static/bca7dfdc5274e4cf0eb951adaa1e4993/ea52d/09_mongo.png 150w,\n/static/bca7dfdc5274e4cf0eb951adaa1e4993/daa7d/09_mongo.png 200w,\n/static/bca7dfdc5274e4cf0eb951adaa1e4993/d115f/09_mongo.png 750w",
            "sizes": "(max-width: 100px) 100vw, 100px",
            "presentationWidth": 100
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABjUlEQVQoz42RyytFURTG9/Ec2PucvU+ugYiBkRIDkoiRjJQBKVJC7kAk95pQklC6D67E4NYdKGXklYFXYaIYKSb+ACMzXCnP3xZzu76+tdZe6zvf2kekY8YBmRaCk46a5peY2XiO6tBjRHemo3r9KaLDl2GdY+87alxHu1JoTzqepxzPtZACFh418XcY/EkQSxLfvC2a64+EuXmNm4vPhLn7OvF98Z+DswpEuoEmLkcsgtj41bge3Al6XfezOnQ45IXLClWxyJC5vlYlOHRxWISjgHZVAIcah4q81Dq6RWgfbIMj1jv+WjUhIfJanByZEkKOiiy57rpyF5EgwzEEp4mHWTmJ0Dy1OLwMn1uHp2ALHOBuj7c7e18yEyJbzhX46iTfqLWAryYRWGBgEd5keA2sWmFcxail4IQV/lu7DafL/JAZUGprAaPqaWiiuQ60EVeBagZb4UZW5V7Vkrdz30Ctwvb//hCzgugdDh9A5a/gAM1TDAbhMdDCQC95P9wH7EdGqXfgtAfxQZ5g5BsMK4c9bbc8nwAAAABJRU5ErkJggg==",
            "aspectRatio": 2.68,
            "src": "/static/7739c056007ab00236269f1717adaaee/0b2a1/12_aws.png",
            "srcSet": "/static/7739c056007ab00236269f1717adaaee/392a1/12_aws.png 67w,\n/static/7739c056007ab00236269f1717adaaee/07e7f/12_aws.png 133w,\n/static/7739c056007ab00236269f1717adaaee/0b2a1/12_aws.png 266w,\n/static/7739c056007ab00236269f1717adaaee/ea52d/12_aws.png 399w,\n/static/7739c056007ab00236269f1717adaaee/daa7d/12_aws.png 532w,\n/static/7739c056007ab00236269f1717adaaee/ef055/12_aws.png 580w",
            "sizes": "(max-width: 266px) 100vw, 266px",
            "presentationWidth": 266
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,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",
            "aspectRatio": 0.72,
            "src": "/static/bf104c5ef4b088b41d43ac12b25ac352/0b2a1/02_css.png",
            "srcSet": "/static/bf104c5ef4b088b41d43ac12b25ac352/392a1/02_css.png 18w,\n/static/bf104c5ef4b088b41d43ac12b25ac352/07e7f/02_css.png 36w,\n/static/bf104c5ef4b088b41d43ac12b25ac352/0b2a1/02_css.png 71w,\n/static/bf104c5ef4b088b41d43ac12b25ac352/ea52d/02_css.png 107w,\n/static/bf104c5ef4b088b41d43ac12b25ac352/daa7d/02_css.png 143w,\n/static/bf104c5ef4b088b41d43ac12b25ac352/39901/02_css.png 1200w",
            "sizes": "(max-width: 71px) 100vw, 71px",
            "presentationWidth": 71
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzUlEQVQ4y2NgwAKCgkPKkgvqzqUX120pKa9aGJNddbamtfdMYV3Pu5jsyps+nm5xIHX///9nwAmiE1KZQbSni31QRuui/1a5i/6n9mz5n9K14b9VzoL/PlUr/5dM3/M/oG7t/5Taaf+drYzsQeoDgsOZsBqYWFDHAqKj4lNaQ+pW/lcI6fxZNHnLn8iGFb+NEif+VQzp+BtVv+xfxYwdv4MrF/zPTU8MAqnPKqxkxmpgRkk9WCImLiEzqmH5f9WI3j+VM3b8a16w919C6+p/OrH9/7qXHvhXPmP3/8jSSb96isKVQOoLCgsZsRpYUloOdnpVVpRhVMW0/zrxk/+ld679Z5Q06V9Kx9r/unET/uf2bfxdO//w//yGiVugYcjIwozdxwwqykowJmte45Srekkz/se3rv5ZMmXrn9CaJf+UQjv/BVQt/bt5/5n/4RERSUB1jMdvvGKwsbHBHTGVrRPB3s7OK6xK7d36v27Kqv8rNu/9XzFr73+VsM5/PuWL/s1as/9/c2f/F0tzUyeQ2tCwMOxOBCUBcyNdGJc3NSuvr7qmbklZXdvRyv5lX9SjJ/yPqlv0v7m1bZqbp68jUA3YIH5+fga8wNVMDV2INat+6gO1+Jn/I6tm/2/IDtMCCd5/9AzFZRr+FRCGpKQknJaWlgbHmIOVKcOURRuZn///Dw6ChOzSXcltq/+nlbaeV+Fi4AdFhop1EJNF1lxG3ah2sH6DhIkI02GGIvEZgYYzONuYgS2Q4GeTrCpI9VZmYODD5iushgFpZiAWA9G4gsO4ZLuYcUK/gkHiJBkgVjNImCQONIwVYugkiMFIBooDcSAQmwKxCpQ2AWJ1KSkpUwV5eR298EZHw6SpnkCN/oaJk7iAdCYQs6O4EslAYSBWAGI1ILYDYg8gtgdibyB2lpSQsNYOKDUzTJ7mAdTsAsQqQFcmAmkd/fgJLDBDAbktGKP4qrNoAAAAAElFTkSuQmCC",
            "aspectRatio": 1.4,
            "src": "/static/549548a0de63e167bbf96a801baa4e0f/0b2a1/10_postgres.png",
            "srcSet": "/static/549548a0de63e167bbf96a801baa4e0f/392a1/10_postgres.png 35w,\n/static/549548a0de63e167bbf96a801baa4e0f/07e7f/10_postgres.png 70w,\n/static/549548a0de63e167bbf96a801baa4e0f/0b2a1/10_postgres.png 140w,\n/static/549548a0de63e167bbf96a801baa4e0f/ea52d/10_postgres.png 210w,\n/static/549548a0de63e167bbf96a801baa4e0f/daa7d/10_postgres.png 280w,\n/static/549548a0de63e167bbf96a801baa4e0f/0f0a2/10_postgres.png 700w",
            "sizes": "(max-width: 140px) 100vw, 140px",
            "presentationWidth": 140
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVQ4y42TS0sbURiGZyxVFEWx8RokEwUruBVE3IRmLnGUWppStKVSNSBewBidtCJ4w4WiCykEnEgW7ap01X+guKlS3Lp0If0Blv4AfT6Z0Sgae8jD+52ZM2/eb84ZRckbpmleqWEYqqcVYMM65Li/JHO06s465cHBYn9RLfUqeoJe2LZ9Icr8G3ptKiH8IPeZ+foEItAPZ7AHCfiLYRp9Cr35AQqmQ6th2Wv5O/U5WgS/qI/RLjQFxQVbzktYAvssnJaUDGm3k3lSzMGFNagpmDIvYTnsYnAEIepTWKDuRA/g0JuX/G9C4Q38kXfJA6Pwj7oV/QS/wbo3XXguq2gelZsHinGTMgBbPPgRRuLxuLSdFCNYpi71093aZc1xMXXVsOOqzbMZpWn+q9rxfqpI7ukxu9EwrR5w+KOMaRgplJ/5zDOTjVIlpeCfy0fHWFApi0UjDXqsp+zRxbQ8QbsRbc6NUMfQ5yQOaE422JzKNIRnd+rrVn6Gul9/qDYNfYZ4CZK0yw5DkFpD66CRul5ajmLwI+xkv2C2QG1xLYHmYBWGIN2SyiQsPbqN4RgPr8tXBLJBS+gr7xglFd5dLUbv4CUJ+yBK4j4SLnLtM2ZvQ+nccNvkxoClv3C8DRNTMRqFce84zcDgJdUG3QOncqLyAAAAAElFTkSuQmCC",
            "aspectRatio": 1.6,
            "src": "/static/346ef40158ba08318c0658fca65c99e0/0b2a1/11_wordpress.png",
            "srcSet": "/static/346ef40158ba08318c0658fca65c99e0/392a1/11_wordpress.png 40w,\n/static/346ef40158ba08318c0658fca65c99e0/07e7f/11_wordpress.png 80w,\n/static/346ef40158ba08318c0658fca65c99e0/0b2a1/11_wordpress.png 161w,\n/static/346ef40158ba08318c0658fca65c99e0/ea52d/11_wordpress.png 241w,\n/static/346ef40158ba08318c0658fca65c99e0/daa7d/11_wordpress.png 322w,\n/static/346ef40158ba08318c0658fca65c99e0/b20d2/11_wordpress.png 1280w",
            "sizes": "(max-width: 161px) 100vw, 161px",
            "presentationWidth": 161
          }
        }
      },
      {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABWElEQVQoz2Pw3f2NAQSuffjHzAAFi+/+Zv7/8yuYbevkzCAlK0sQg4CUjAzEgD2v/zOC6P///7MCsRzM4OKiAiY2Tg5GoEJGmJgkkA3EMIOYkMQhjB3P/oIVv/75327nk99nNtz78e3cu3/N////4WFAAkDN3EAswIAGQGJAzIPiQhA4/PLvsar9H/67Tjzzf82j//9P3bgXCRSOk1dSzgNqyAXidiCuAOIcIM4A4mQgLgTieCDuAmJmFJt2Pf1zOm3js/8ufSd/zbz25//jT99DgMJ5ckpKTUDF5UDcCMTZQDwfiDuAuBWI+4A4AogbgJgXbNCEa7/BXn7w9X/Iloe/Hq2//+v/sVd/FwDDUhjZQkmgC0BhCdQoC8RcSF7mgNKQ8ARqZCi58A/GFv3x/78FTPHGrdsZGYgAsAiBxTYYAF0FD4Oso9+Yfv+DxLy5jS16EmHEl3QAQfyO3I7XvMEAAAAASUVORK5CYII=",
            "aspectRatio": 2.56,
            "src": "/static/81da10d7fe4e203f74c1fd5e2d316f5b/0b2a1/08_webpack.png",
            "srcSet": "/static/81da10d7fe4e203f74c1fd5e2d316f5b/392a1/08_webpack.png 64w,\n/static/81da10d7fe4e203f74c1fd5e2d316f5b/07e7f/08_webpack.png 128w,\n/static/81da10d7fe4e203f74c1fd5e2d316f5b/0b2a1/08_webpack.png 257w,\n/static/81da10d7fe4e203f74c1fd5e2d316f5b/ea52d/08_webpack.png 385w,\n/static/81da10d7fe4e203f74c1fd5e2d316f5b/daa7d/08_webpack.png 514w,\n/static/81da10d7fe4e203f74c1fd5e2d316f5b/a5303/08_webpack.png 3916w",
            "sizes": "(max-width: 257px) 100vw, 257px",
            "presentationWidth": 257
          }
        }
      }
    ]
  }
}

beforeEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => (data));
});

afterEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => {});
});

describe("Skill Set Grid", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<SkillsSetGrid />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should call useStaticQuery", () => {
    render(<SkillsSetGrid />)

    expect(Gatsby.useStaticQuery).toBeCalled()
  })
})