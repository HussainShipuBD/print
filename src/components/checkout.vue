<template>
    <div>
        <div class="_1content">
            <div class="_checkout">
                <div class="container">
                    <h1 class="_checkout_title">checkout</h1>

                    <div class="row">
                        <div class="col-12 col-md-8 col-lg-8">
                            <!-- Billing address -->
                            <div v-if="tab == 1" class="_checkout_left">
                                <div class="_checkout_left_item">
                                    <h1 class="_checkout_left_title">Billing Address</h1>

                                    <div class="row">
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">First Name</p>
                                                <input class="_1input" placeholder="First Name">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Last Name</p>
                                                <input class="_1input" placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Company Name</p>
                                                <input class="_1input" placeholder="Company Name">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Address Line 1</p>
                                                <input class="_1input" placeholder="Address Line 1">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Address Line 2</p>
                                                <input class="_1input" placeholder="Address Line 2">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Contect Telephone</p>
                                                <input class="_1input" placeholder="Contect Telephone">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Town/City</p>
                                                <input class="_1input" placeholder="Town/City">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Country</p>
                                                <input class="_1input" placeholder="Country">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Postcode</p>
                                                <input class="_1input" placeholder="Postcode">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">Country</p>
                                                <input class="_1input" placeholder="Country">
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1button_group">
                                                <button @click="tab = 2" class="_1btn">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Billing address -->

                            <!-- Delivery Address -->
                            <div v-if="tab == 2" class="_checkout_left">
                                <div class="_checkout_left_item">
                                    <h1 class="_checkout_left_title">Delivery Address</h1>

                                    <div class="_del_add">
                                        <div class="_1group">
                                            <p class="_1label _del_add_label">
                                                Address Book
                                                <span>Add a new address</span>
                                            </p>
                                            <div class="_input_button">
                                                <Icon type="ios-search"></Icon>
                                                <input class="_1input" placeholder="Town/City">
                                            </div>
                                        </div>

                                        <div class="_del_add_main">
                                            <div class="row">
                                                <!-- Item -->
                                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                                    <div class="_del_add_card">
                                                        <p class="_del_add_card_ceheck"><Icon type="ios-checkmark"></Icon></p>
                                                        <p class="_del_add_card_title">Billing Address</p>

                                                        <div class="_del_add_card_details">
                                                            <p class="_del_add_card_text">SHAZNA SIDDIQUE</p>
                                                            <p class="_del_add_card_text">The Wandsworth Printing Co. LTD</p>
                                                            <p class="_del_add_card_text">1 SELKIRK ROAD</p>
                                                            <p class="_del_add_card_text">Tooting</p>
                                                            <p class="_del_add_card_text">LONDON</p>
                                                            <p class="_del_add_card_text">County</p>
                                                            <p class="_del_add_card_text">SW17 0ER</p>
                                                            <p class="_del_add_card_text">United Kingdom</p>
                                                            <p class="_del_add_card_text">P: 02087676827</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item -->

                                                <!-- Item -->
                                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                                    <div class="_del_add_card _active">
                                                        <p class="_del_add_card_ceheck"><Icon type="ios-checkmark"></Icon></p>
                                                        <p class="_del_add_card_title">Billing Address</p>

                                                        <div class="_del_add_card_details">
                                                            <p class="_del_add_card_text">SHAZNA SIDDIQUE</p>
                                                            <p class="_del_add_card_text">The Wandsworth Printing Co. LTD</p>
                                                            <p class="_del_add_card_text">1 SELKIRK ROAD</p>
                                                            <p class="_del_add_card_text">Tooting</p>
                                                            <p class="_del_add_card_text">LONDON</p>
                                                            <p class="_del_add_card_text">County</p>
                                                            <p class="_del_add_card_text">P:</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item -->

                                                <!-- Item -->
                                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                                    <div class="_del_add_card">
                                                        <p class="_del_add_card_ceheck"><Icon type="ios-checkmark"></Icon></p>
                                                        <p class="_del_add_card_title">Billing Address</p>

                                                        <div class="_del_add_card_details">
                                                            <p class="_del_add_card_text">SHAZNA SIDDIQUE</p>
                                                            <p class="_del_add_card_text">The Wandsworth Printing Co. LTD</p>
                                                            <p class="_del_add_card_text">1 SELKIRK ROAD</p>
                                                            <p class="_del_add_card_text">Tooting</p>
                                                            <p class="_del_add_card_text">LONDON</p>
                                                            <p class="_del_add_card_text">County</p>
                                                            <p class="_del_add_card_text">P:</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item -->

                                                
                                                <!-- Item -->
                                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                                    <div class="_del_add_card">
                                                        <p class="_del_add_card_ceheck"><Icon type="ios-checkmark"></Icon></p>
                                                        <p class="_del_add_card_title">Billing Address</p>

                                                        <div class="_del_add_card_details">
                                                            <p class="_del_add_card_text">SHAZNA SIDDIQUE</p>
                                                            <p class="_del_add_card_text">The Wandsworth Printing Co. LTD</p>
                                                            <p class="_del_add_card_text">1 SELKIRK ROAD</p>
                                                            <p class="_del_add_card_text">Tooting</p>
                                                            <p class="_del_add_card_text">LONDON</p>
                                                            <p class="_del_add_card_text">County</p>
                                                            <p class="_del_add_card_text">P:</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item -->

                                                <!-- Pagination -->
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_pagination">
                                                        <Page :total="100"></Page>
                                                    </div>
                                                </div>
                                                <!-- Pagination -->

                                                <!-- Button -->
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_1button_group">
                                                        <p @click="tab = 1" class="_1button_group_back">Back</p>
                                                        <button @click="tab = 3" class="_1btn">Next</button>
                                                    </div>
                                                </div>
                                                <!-- Button -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Delivery Address -->

                            <!-- Optional extra -->
                            <div v-if="tab == 3" class="_checkout_left">
                                <div class="_checkout_left_item">
                                    <h1 class="_checkout_left_title">Optional Extra</h1>

                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1group">
                                                <p class="_1label">Custom Order Reference</p>
                                                <input class="_1input" placeholder="Custom Order Reference">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1group">
                                                <Checkbox></Checkbox>Custom Delivery Note: £1.00
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1group">
                                                <p class="_1label">+ Your Custom Delivery Note (optional)</p>
                                                <textarea class="_1textarea" rows="6" plceholder="Note"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">+ Your VAT Number</p>
                                                <input class="_1input" placeholder="VAT Number">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1group">
                                                <p class="_1label">+ Your Company Number</p>
                                                <input class="_1input" placeholder="Company Number">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1group">
                                                <p class="_1label">+ Your Logo To The Delivery Note (optional)</p>
                                                <button class="_2btn" type="button">Browse</button>
                                                <p class="_note _mar_t7">We only accept JPG or PNG images</p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1group">
                                                <Checkbox></Checkbox>
                                                Your Company Name on Label: £0.00 (optional)
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1button_group">
                                                <p @click="tab = 2" class="_1button_group_back">Back</p>
                                                <button @click="tab = 4" class="_1btn">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Optional extra -->

                            <!-- Payment method -->
                            <div v-if="tab == 4" class="_checkout_left">
                                <div class="_checkout_left_item">
                                    <h1 class="_checkout_left_title">Payment</h1>

                                    <div class="">
                                        <p class="_1label">Select payment type:</p>
                                        
                                        <!-- Item -->
                                        <div class="_method_item _active">
                                            <h1 class="_method_item_title">
                                                <span>S SIDDIQUE, Last four digits:5803, 11/22</span>
                                                <Icon type="ios-arrow-down" />
                                                <Icon type="ios-checkmark"></Icon>
                                            </h1>

                                            <div class="_method_item_main">
                                                <input class="_1input" placeholder="CVV Code">
                                            </div>
                                        </div>
                                        <!-- Item -->
                                        <!-- Item -->
                                        <div class="_method_item">
                                            <h1 class="_method_item_title">
                                                <span>MRS S SIDDIQUE, Last four digits:4582, 06/23</span>
                                                <Icon type="ios-arrow-down" />
                                                <Icon type="ios-checkmark"></Icon>
                                            </h1>

                                            <div class="_method_item_main">
                                                <input class="_1input" placeholder="CVV Code">
                                            </div>
                                        </div>
                                        <!-- Item -->
                                        <!-- Item -->
                                        <div class="_method_item">
                                            <h1 class="_method_item_title">
                                                <span>Pay with Paypal</span>
                                                <Icon type="ios-arrow-down" />
                                                <Icon type="ios-checkmark"></Icon>
                                            </h1>

                                            <div class="_method_item_main">
                                                <input class="_1input" placeholder="CVV Code">
                                            </div>
                                        </div>
                                        <!-- Item -->
                                        <!-- Item -->
                                        <div class="_method_item">
                                            <h1 class="_method_item_title">
                                                <span>New card</span>
                                                <Icon type="ios-arrow-down" />
                                                <Icon type="ios-checkmark"></Icon>
                                            </h1>

                                            <div class="_method_item_main">
                                                <div class="row">
                                                    <div class="col-12 col-md-12 col-lg-12">
                                                        <div class="_1group">
                                                            <p class="_1label">Name: (as appears on card)</p>
                                                            <input class="_1input" type="text" placeholder="Name">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-12 col-lg-12">
                                                        <div class="_1group">
                                                            <p class="_1label">Card number</p>
                                                            <input class="_1input" type="number" placeholder="Card number">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="_1group">
                                                            <p class="_1label">Expiry Date</p>
                                                            <input class="_1input" type="number" placeholder="MM/DD">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="_1group">
                                                            <p class="_1label">CCV Code</p>
                                                            <input class="_1input" type="text" placeholder="Security Code">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <Checkbox></Checkbox>Save my card
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Item -->

                                        <div class="_1button_group">
                                            <p @click="tab = 3" class="_1button_group_back">Back</p>
                                            <button class="_1btn">Confirm Payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Payment method -->
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_checkout_right">
                                <h1 class="_checkout_left_title">Order Summary</h1>

                                <p class="_checkout_subtotal">
                                    Item Total<br/>
                                    (1 item)
                                    <span>£103.09</span>
                                </p>
                                <p class="_checkout_subtotal">
                                    Standard Delivery
                                    <span>£10.9</span>
                                </p>
                                <p class="_checkout_subtotal">
                                    VAT
                                    <span>£103.09</span>
                                </p>

                                <h1 class="_checkout_total">
                                    Total 
                                    <span>£103.09</span>
                                </h1>

                                <p class="_checkout_booklets">Booklets</p>
                                <p class="_checkout_bookle_x">500 x Stapled Booklets</p>

                                <div class="_checkout_date_main">
                                    <p class="_checkout_date_title">Estimated Delivery Date</p>
                                    <p class="_checkout_date">Jun 10 - Jun 13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        tab: 1
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>