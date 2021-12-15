# 50 Day Frontend Practice

> <h3> Goals: </h3>

- Sharpen basic frontend skills
- No framework used in those projects
- Each one should be simple and fast
  <br/>
  <br/>

> <h3> Project contents:</h3>

|               Name                |                                             Description                                              |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------: |
|      [Expending Cards](#p1)       |                         'click' will invoke the expension of target picture                          |
| [Interactive Progress Steps](#p2) |           visualize progress by the color of the bar; and "Congrats" when you hit the end;           |
|         [Rotate Nav](#p3)         |                      Click button will rotate the page and show the nav links;                       |
|    [Hidden Search Widget](#p4)    |        Click the search icon will expand the search input area, Click again it will disappear        |
|       [Blurry Loading](#p5)       |                       update the text opacity and img filter blur every 30 ms                        |
|      [Scroll Animation](#p6)      | When we scroll down the window, the content box will easi in from left or right based on even or odd |

<br/>
<br/>

>  <h3> Detailed Demo</h3>

<ol>
  <li><h4 id='p1'>Expending Cards ( Dec 6, 2021 )</h4>
    <ul>
      <li>Flexbox in css; </li>
      <li>Change elements' classList in JS</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="https://github.com/JiangyanLiNEU/50DayFrontend/blob/main/readmeIMG/1-1.png"/></td>
            <td valign="top"><img src="https://github.com/JiangyanLiNEU/50DayFrontend/blob/main/readmeIMG/1-2.png"/></td>
          </tr>
        </table>
  </div>
  <li><h4 id='p2'>Process Steps ( Dec 7, 2021 )</h4>
    <ul>
      <li>postion: relate/absolute;</li>
      <li>element::before; </li>
      <li>custom properties (--line-border-fill)</li>
      <li>btn:hover/active/disabled</li>
      <li>modify elements' style/class in JS</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="https://github.com/JiangyanLiNEU/50DayFrontend/blob/main/readmeIMG/2-1.png"/></td>
            <td valign="top"><img src="https://github.com/JiangyanLiNEU/50DayFrontend/blob/main/readmeIMG/2-2.png"/></td>
            <td valign="top"><img src="https://github.com/JiangyanLiNEU/50DayFrontend/blob/main/readmeIMG/2-3.png"/></td>
          </tr>
        </table>
  </div>

  <li><h4 id='p3'>Rotate Nav ( Dec 8, 2021 )</h4>
    <ul>
      <li>Transform: rotate(-70deg) </li>
      <li>postion: fixed/absolute</li>
      <li>different color to demenstrate different pages</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="./readmeIMG/3-1.png"/></td>
            <td valign="top"><img src="./readmeIMG/3-2.png"/></td>
          </tr>
        </table>
  </div>

  <li><h4 id='p4'>Hidden Search Widget ( Dec 9, 2021 )</h4>
    <ul>
      <li>Transform: translateX(198px) </li>
      <li>postion: relative/absolute</li>
      <li>add 'active' to classList</li>
      <li>Different css to active and non-active html</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="./readmeIMG/4-1.png"/></td>
            <td valign="top"><img src="./readmeIMG/4-2.png"/></td>
          </tr>
        </table>
  </div>

  <li><h4 id='p5'>Blurry Loading ( Dec 10, 2021 )</h4>
    <ul>
      <li>filter: blur(0px) </li>
      <li>ele.style.opacity = 0</li>
      <li>ele.style.filter = `blur(${loading}px)`</li>
      <li>ele.innerHTML = `${load}`</li>
      <li>scale function in JS</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="./readmeIMG/5-1.png"/></td>
            <td valign="top"><img src="./readmeIMG/5-2.png"/></td>
            <td valign="top"><img src="./readmeIMG/5-3.png"/></td>
          </tr>
        </table>
  </div>

  <li><h4 id='p6'>Scroll Animation ( Dec 15, 2021 )</h4>
    <ul>
      <li>transform: translateX() to set initial box location </li>
      <li>.box:nth-of-type(even), to make difference between even and odd</li>
      <li>window.innerHeight to get triggerBottom height</li>
      <li>box.getBoundingClientRect() to get location of box</li>
      <li>add/remove 'show' into classlist to control the animation</li>
    </ul>
  </li>
  <div>
  <table>
          <tr>
            <td valign="top"><img src="./readmeIMG/6-1.png"/></td>
          </tr>
        </table>
  </div>
</ol>
