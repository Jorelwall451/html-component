# HTML-COMPONENT

 HTML-COMPONENT is a framework that adds the possibility of separating code through components, leaving your code cleaner. 

### `<component>`

The `<component>` tag is used to define a generic component. It encapsulates a set of related HTML elements. In the example provided, the `<component>` is used to define a generic layout with multiple divisions (`<div>`) that contain example text.

### `<new-component>`

The `<new-component>` tag is used to define a new component. It allows the creation of custom components with the desired structure and behavior. In the given example, `<new-component>` is used to define specific components, such as the layout of a page (`<Layout>`), the header (`<Header>`), etc.

### Parameters

Both the `<component>` and `<new-component>` tags can accept parameters that can be passed to the component. For example, 
 - `param:title` parameter specifies that the component can accept a parameter called "title" that is not optional.
 - `param:title:optional` parameter specifies that the component can accept a parameter called "title" that is optional. 
 
 This allows the component to be customized with different titles as needed.

### Variables

Within a component, you can use variables enclosed in braces `{}` to dynamically insert values ​​into its content. For example, `{title}` is a variable that will be replaced by the value of the "title" parameter passed to the component.

These are the main tags and concepts used in the example provided. They enable the creation of a modular, reusable framework for defining custom components in a tagging system.