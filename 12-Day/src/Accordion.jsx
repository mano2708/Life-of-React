// import { Accordion,AccordionBody, AccordionItem, AccordionHeader, UncontrolledAccordion, 
//          Alert,UncontrolledAlert, 
//          Badge, 
//          Breadcrumb, BreadcrumbItem,
//          Button, ButtonGroup,
//          Card, CardBody, CardHeader, CardSubtitle, CardTitle, CardText,
//          Row, Col,
//          Carousel, CarouselCaption, CarouselItem, CarouselIndicators, CarouselControl, UncontrolledCarousel,
//          Dropdown,
//          DropdownToggle,
//          DropdownMenu,
//          DropdownItem,
//       } from 'reactstrap'
// // import Image from "https://placehold.co/300";
// import React, { useState } from 'react'

// export default function Accordions() {

//    let [open ,setOpen] = useState('');
//    let [alert, setAlert] = useState(true);

//    let [dropdown, setDropDown] = useState(false);

//    let [r,setR] = useState();

//    const toggle = (id) => {
//       if (open===id){
//          setOpen();
//       }
//       else{
//          setOpen(id);
//       }
//    }


//    const toggleAlert = () => {
//       setAlert(false);
//    }



//    const items = [
//       {
//         src: 'https://picsum.photos/id/123/1200/400',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         key: 1,
//       },
//       {
//         src: 'https://picsum.photos/id/456/1200/400',
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         key: 2,
//       },
//       {
//         src: 'https://picsum.photos/id/678/1200/400',
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         key: 3,
//       },
//    ];



//    const [activeIndex, setActiveIndex] = useState(0);
//    const [animating, setAnimating] = useState(false);

//    const next = () => {
//       if (animating) return;
//       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//       setActiveIndex(nextIndex);
//    };

//    const previous = () => {
//       // if (animating) return;
//       const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//       setActiveIndex(nextIndex);
//    };

//    const goToIndex = (newIndex) => {
//       if (animating) return;
//       setActiveIndex(newIndex);
//    };

//    const slides = items.map((item) => {
//       return (
//          <CarouselItem 
//          onExiting={() => setAnimating(true)}
//          onExited={() => setAnimating(false)}
//          key={item.src}
//          >
//          <img src={item.src} alt={item.altText} />
//          <CarouselCaption
//             captionText={item.caption}
//             captionHeader={item.caption}
//          />
//          </CarouselItem>
//       );
//    });




//    return (<>

//    <div className='my-5'>
//       <Accordion open={open} toggle={toggle}>
//          <AccordionItem>
//             <AccordionHeader targetId='1'>Accordion 1</AccordionHeader>
//             <AccordionBody accordionId='1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='2'>Accordion 2</AccordionHeader>
//             <AccordionBody accordionId='2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='3'>Accordion 3</AccordionHeader>
//             <AccordionBody accordionId='3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>

//       </Accordion>
//    </div>
//    <hr/>
//    <div className='my-5'>
//       <Alert color="warning">Hey there!...</Alert>
//    </div>

//    <div>
//       <Badge color="success" className='m-2 p-3 fw-bold fs-1'>Hello world</Badge>
//       <Badge color="success" pill={true} className='m-2 p-3 fw-bold fs-1'>Hello world</Badge>
//    </div>


//    <Breadcrumb>
//       <BreadcrumbItem>
//          <a className='h3'>home</a>
//       </BreadcrumbItem>
//       <BreadcrumbItem>
//          <a className='h3'>mano</a>
//       </BreadcrumbItem>
//       <BreadcrumbItem active>
//          <a className='h3'>React</a>
//       </BreadcrumbItem>
//    </Breadcrumb>

//    <Button size='sm' color='info' block={true} disabled={false} className="btn btn-outline-primary text-dark">Click Me</Button>

//    <ButtonGroup>
//       <Button>Name</Button>
//       <Button>Mail</Button>
//       <Button>Phone NO</Button>
//    </ButtonGroup>
   
//    {/* Radio Button */}

//    <ButtonGroup>
//       <Button color="success" onClick={() => setR(1)} active={r === 1}>Sample Button 1</Button>
//       <Button color="success" onClick={() => setR(2)} active={r === 2}>Sample Button 2</Button>
//       <Button color="success" onClick={() => setR(3)} active={r === 3}>Sample Button 3</Button>
//    </ButtonGroup>
//    <p>selected : {r}</p>

   

//    <div className='row justify-content-center align-items-center'>
//       <div className='col-md-4'>
//          <Card style={{width:"18rem"}}>
//             <CardHeader>Sample Card Header</CardHeader>
//             <img src="https://placehold.co/120x80"/>
//             <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                Laborum neque quibusdam incidunt in, voluptate consequatur, praesentium 
//                non exercitationem harum minima libero. Itaque quod quaerat deserunt 
//                ab voluptatibus facilis dicta, ipsam minima quae, minus debitis qui 
//                delectus, quasi dolorem necessitatibus ratione?</CardBody>
//          </Card>
//       </div>

//       <div className='col-md-4'>
//          <Card style={{width:"18rem"}}>
//             <CardHeader>Sample Card Header</CardHeader>
//             <CardSubtitle>Card Sub Title</CardSubtitle>
//             <img src="https://placehold.co/120x80"/>
//             <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                Laborum neque quibusdam incidunt in, voluptate consequatur, praesentium 
//                non exercitationem harum minima libero. Itaque quod quaerat deserunt 
//                ab voluptatibus facilis dicta, ipsam minima quae, minus debitis qui 
//                delectus, quasi dolorem necessitatibus ratione?</CardBody>
//          </Card>
//       </div>

//       <div className='col-md-4'>
//          <Card style={{width:"18rem"}}>
//             <CardHeader>Sample Card Header</CardHeader>
//             <img src="https://placehold.co/120x80"/>
//             <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                Laborum neque quibusdam incidunt in, voluptate consequatur, praesentium 
//                non exercitationem harum minima libero. Itaque quod quaerat deserunt 
//                ab voluptatibus facilis dicta, ipsam minima quae, minus debitis qui 
//                delectus, quasi dolorem necessitatibus ratione?</CardBody>
//          </Card>
//       </div>
//    </div>


//    <Dropdown isOpen={dropdown} toggle={() => setDropDown(!dropdown)} direction='down'>
//       <DropdownToggle caret > Main</DropdownToggle>
//       <DropdownMenu>
//          <DropdownItem>Item 1</DropdownItem>
//          <DropdownItem>Item 2</DropdownItem>
//          <DropdownItem>Item 3</DropdownItem>
//          <DropdownItem>Item 4</DropdownItem>
//          <DropdownItem>Item 5</DropdownItem>
//       </DropdownMenu>
//    </Dropdown>


//    <Row>
//       <Col sm="6">
//          <Card body>
//             <CardTitle tag="h5">
//             Special Title Treatment
//             </CardTitle>
//             <CardText>
//             With supporting text below as a natural lead-in to additional content.
//             </CardText>
//             <Button>
//             Go somewhere
//             </Button>
//          </Card>
//       </Col>
//       <Col sm="6">
//          <Card body>
//             <CardTitle tag="h5">
//             Special Title Treatment
//             </CardTitle>
//             <CardText>
//             With supporting text below as a natural lead-in to additional content.
//             </CardText>
//             <Button>
//             Go somewhere
//             </Button>
//          </Card>
//       </Col>
//    </Row>



//    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
//       {slides}
//       <CarouselControl direction='prev' directionText='prev' onClickHandler={previous}/>
//       <CarouselControl direction='next'directionText='next' onClickHandler={next}/>
//    </Carousel>













//    <UncontrolledCarousel
//       items={[
//          {
//             altText: 'Slide 1',
//             caption: 'Slide 1',
//             key: 1,
//             src: 'https://picsum.photos/id/123/1200/600'
//          },
//          {
//             altText: 'Slide 2',
//             caption: 'Slide 2',
//             key: 2,
//             src: 'https://picsum.photos/id/444/1200/600'
//          },
//          {
//             altText: 'Slide 3',
//             caption: 'Slide 3',
//             key: 3,
//             src: 'https://picsum.photos/id/68/1200/600'
//          }
//       ]}
//    />




//    <div className='my-5'>
//       <Alert color="warning" isOpen={alert} toggle={toggleAlert}>Hey there!...</Alert>
//       <UncontrolledAlert color="info">I am an alert and I can be dismissed!</UncontrolledAlert>
//    </div>



//    <div className='my-5'>
//       <Accordion flush={true} open={open} toggle={toggle}>
//          <AccordionItem>
//             <AccordionHeader targetId='1'>Accordion 1</AccordionHeader>
//             <AccordionBody accordionId='1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='2'>Accordion 2</AccordionHeader>
//             <AccordionBody accordionId='2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='3'>Accordion 3</AccordionHeader>
//             <AccordionBody accordionId='3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>

//       </Accordion>
//    </div>
   
//    <UncontrolledAccordion defaultOpen="1">
//    <AccordionItem>
//             <AccordionHeader targetId='1'>Accordion 1</AccordionHeader>
//             <AccordionBody accordionId='1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='2'>Accordion 2</AccordionHeader>
//             <AccordionBody accordionId='2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//          <AccordionItem>
//             <AccordionHeader targetId='3'>Accordion 3</AccordionHeader>
//             <AccordionBody accordionId='3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</AccordionBody>
//          </AccordionItem>
//    </UncontrolledAccordion>
//    </>
//    )
// }






import {Form, FormGroup, FormFeedback, FormText, Label, Input, Col} from "reactstrap";






function Accordions() {
   return (<>
   <Form>
      

      <FormGroup row>
         <Label for="exampleEmail" size="lg" md={2}>
            Input without validation
         </Label>

         <Col md={10}>
         <Input invalid/>
         </Col>
         
         <FormFeedback >
            You will not be able to see this
         </FormFeedback>
         
         <FormText>
            Example help text that remains unchanged.
         </FormText>
      </FormGroup>


      <FormGroup>
         <Label for="exampleEmail">
            Valid input
         </Label>
      
         <Input valid />
      
         <FormFeedback valid>
            Sweet! that name is available
         </FormFeedback>
      
         <FormText>
            Example help text that remains unchanged.
         </FormText>
      </FormGroup>


      <FormGroup>      
         <Label for="examplePassword">
            Invalid input
         </Label>
      
         <Input invalid />
      
         <FormFeedback>
            Oh noes! that name is already taken
         </FormFeedback>
      
         <FormText>
            Example help text that remains unchanged.
         </FormText>      
      </FormGroup>
      

      <FormGroup>
         <Label for="exampleEmail">
            Input without validation
         </Label>
      
         <Input  />
      
         <FormFeedback tooltip>
            You will not be able to see this
         </FormFeedback>
      
         <FormText>
            Example help text that remains unchanged.
         </FormText>      
      </FormGroup>


      <FormGroup className="position-relative">      
         <Label for="exampleEmail">
            Valid input
         </Label>

         <Input valid />
      
         <FormFeedback tooltip valid>
            Sweet! that name is available
         </FormFeedback>
      
         <FormText>
            Example help text that remains unchanged.
         </FormText>      
      </FormGroup>


      <FormGroup className="position-relative">
         <Label for="examplePassword">
            Invalid input
         </Label>
      
         <Input invalid />
      
         <FormFeedback tooltip>
            Oh noes! that name is already taken
         </FormFeedback>
      
         <FormText>
            Example help text that remains unchanged.
         </FormText>
      </FormGroup>

   </Form>
   </>);
}

export default Accordions;