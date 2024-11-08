import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nigma';

  capabilities = [
    {
      title: "UX & product design",
      description: "We create intuitive and engaging user experiences that delight your customers and drive business results."
    },
    {
      title: "Product development",
      description: "From concept to launch, we develop robust and scalable products that meet your business needs and user expectations."
    },
    {
      title: "Award-winning web design",
      description: "Our creative team designs visually stunning websites that capture your brand essence and engage your audience."
    },
    {
      title: "Communication design",
      description: "We craft compelling visual narratives and brand identities that effectively communicate your message across all channels."
    }
  ];

  toggleCapability(index: number) {
    // Implement toggle functionality here
    console.log(`Toggled capability at index ${index}`);
  }

  onSubmit() {
    // Implement form submission logic here
    console.log('Form submitted');
  }
}
