![[Pasted image 20250708002410.png]]
# Model
>[!note] Definition
>Defines what the data app should contain. If the state of this data changes, then the model usually notify the view and sometimes the controller.

# View
>[!note] Definition
>The view defines how the app's data should be displayed.

>[!todo] Shopping list app
>The view would define how the list is presented to the users and received the data to display.

![[Pasted image 20250708002509.png]]

# Controller
>[!note] Definition
>Contains logic that updates the model or the view in response to input from the users of the app.

>[!todo] Shopping list app
>Our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.