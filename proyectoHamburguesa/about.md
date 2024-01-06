# DOCUMENTATION

https://www.youtube.com/watch?v=irfbn103AzE&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=7

https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Containers

it makes a container for us, but it has some margin, so lets look options

+ container: took around 90% of the screen (it has a margin)
+ container-fluid: took 100% of the screen

https://getbootstrap.com/docs/5.3/layout/containers/#default-container


#### Grid contariner

    <div class="container text-center">
        <div class="row">

          <div class="col border">
            Column
          </div>
          <div class="col border">
            Column
          </div>
          <div class="col border">
            Column
          </div>

        </div>
    </div>

it consist in rows and colums 

https://getbootstrap.com/docs/5.3/layout/grid/

<hr>

## Text

https://getbootstrap.com/docs/5.3/utilities/text/

https://www.youtube.com/watch?v=iUCyU_U0J2E&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=3

#### Alignt text
we can aligth text with:

    text-center
    text-end
    tex-start

#### Text decoration

    text-decoration-underline
    text-decoration-line-through
    text-decoration-none

#### text weight

https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics

    fw-bold

#### text color

https://getbootstrap.com/docs/5.3/utilities/colors/#colors

    text-primary
    text-secondary
    text-info
    [...]

#### text-opacity
https://getbootstrap.com/docs/5.3/utilities/colors/#opacity

give some transparency to text 

    text-opacity-75
    text-opacity-50
    text-opacity-25

it doesn't exist an 80% of opacity or something, just the last given (75, 50, 25)
<hr>

## Padding

https://getbootstrap.com/docs/5.3/utilities/spacing/#notation

    p-5 (all padding)
    pt-5 (padding top)
    pb-5 (padding bottom)
    ps-5 (padding start / left)
    pe-5 (padding end / rigth)
    py-5 (top and botton)
    px-5 (left and rigth)

#### Where property is one of:

+ m - for classes that set margin
+ p - for classes that set padding

Where sides is one of:

+ t - for classes that set margin-top or padding-top
+ b - for classes that set margin-bottom or padding-bottom
+ s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
+ e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
+ x - for classes that set both *-left and *-right
+ y - for classes that set both *-top and *-bottom
+ blank - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

+ 0 - for classes that eliminate the margin or padding by setting it to 0
+ 1 - (by default) for classes that set the margin or padding to $spacer * .25
+ 2 - (by default) for classes that set the margin or padding to $spacer * .5
+ 3 - (by default) for classes that set the margin or padding to $spacer
+ 4 - (by default) for classes that set the margin or padding to $spacer * 1.5
+ 5 - (by default) for classes that set the margin or padding to $spacer * 3
+ auto - for classes that set the margin to auto

<hr>

## Border

https://getbootstrap.com/docs/5.3/utilities/borders/#border

Just make a white border

    border

Make a border with a color

    border-info


Make a bottom border

    border-bottom

Border width

    border-5




# COMPONENTS 

## buttons

https://www.youtube.com/watch?v=ZZXGmoQ4PdI&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=4
https://getbootstrap.com/docs/5.3/components/buttons/

    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">

## Offcanvas

## Accordion

## Popover

## Toasts