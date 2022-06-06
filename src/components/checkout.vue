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
                                                <p class="_1button_group_back">Back</p>
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
                                            <p class="_1label">Address Book</p>
                                            <div class="_input_button">
                                                <Icon type="ios-arrow-down" />
                                                <input class="_1input" placeholder="Town/City">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Delivery Address -->
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
        tab: 2
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>