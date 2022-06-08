<template>
    <div>
        <div class="_1content">
            <div class="container">
                <div class="_order">
                    <h1 class="_oreder_title">Order history</h1>

                    <div class="_order_filter">
                        <div class="_order_filter_left">
                            <p class="_order_filter_text">View orders between :</p>

                            <div class="_order_filter_input">
                                <div class="_order_filter_int">08/05/2200</div>
                            </div>
                            <p class="_order_filter_vs">-</p>
                            <div class="_order_filter_input">
                                <div class="_order_filter_int">08/05/2200</div>
                            </div>
                        </div>

                        <div class="_order_filter_right">
                            <select>
                                <option>All(9)</option>
                                <option>Dispatched</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                    </div>

                    <div class="_order_table_main">
                        <div class="_order_table_top">
                            <div class="_order_table_one">
                                <p class="_order_table_th">Order No/ref</p>
                            </div>
                            <div class="_order_table_two">
                                <p class="_order_table_th">Status</p>
                            </div>
                            <div class="_order_table_three">
                                <p class="_order_table_th">Order Date</p>
                            </div>
                            <div class="_order_table_four">
                                <p class="_order_table_th">Delivery Address</p>
                            </div>
                        </div>
                        
                        <!-- Item -->
                        <div  @click="isActive = true" :class="isActive == true?'_order_table':'_active  _order_table'">
                            <div class="_order_table_item_top">
                                <div class="_order_table_left align-items-center">
                                    <div class="_order_table_one">
                                        <p class="_order_table_no">RP-971610</p>
                                        <p class="_order_table_no_text">iris coconut drops, iris peanut drops</p>
                                    </div>

                                    <div class="_order_table_two">
                                        <p class="_order_table_status _dispatched"><i>Dispatched</i></p>
                                    </div>

                                    <div class="_order_table_three">
                                        <p class="_order_table_date">08/08/2022</p>
                                    </div>

                                    <div class="_order_table_four">
                                        <p class="_order_table_addrress _1text_overflow">1 SELKIRK ROAD, Tooting, LONDON, County, SW17.</p>
                                    </div>
                                </div>

                                <div class="_order_table_right">
                                    <p class="_order_table_icon"><Icon type="ios-arrow-down" /></p>
                                </div>
                            </div>

                            <div class="_order_table_item_bottom">
                                <div class="_order_table_left">
                                    <!-- Item -->
                                    <div class="_order_table_left_item">
                                        <p class="_order_table_first">First side</p>
                                        <div class="_order_table_card">
                                            <h1 class="_order_table_card_title">51mm Circle Stickers</h1>
                                            <p class="_order_table_card_des">250, 51mm Circle, Single Sided, 190gsm Adhesive Sticker, Flat, No Lamination, None, N/A</p>
                                            <p class="_order_table_card_date">Date : <span>08/08/2022</span></p>
                                            <p class="_order_table_card_price">£25.75</p>
                                        </div>

                                        <div class="_order_table_button">
                                            <button class="_1btn _btn_long">Download First Side</button>
                                            <button class="_2btn _btn_long">Track this item</button>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_order_table_left_item">
                                        <p class="_order_table_first">First side</p>
                                        <div class="_order_table_card">
                                            <h1 class="_order_table_card_title">51mm Circle Stickers</h1>
                                            <p class="_order_table_card_des">250, 51mm Circle, Single Sided, 190gsm Adhesive Sticker, Flat, No Lamination, None, N/A</p>
                                            <p class="_order_table_card_date">Date : <span>08/08/2022</span></p>
                                            <p class="_order_table_card_price">£25.75</p>
                                        </div>

                                        <div class="_order_table_button">
                                            <button class="_1btn _btn_long">Download First Side</button>
                                            <button class="_2btn _btn_long">Track this item</button>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                </div>
                                <div class="_order_table_right">
                                    <div class="_order_table_details">
                                        <p class="_order_table_details_item">1 SELKIRK ROAD</p>
                                        <p class="_order_table_details_item">Tooting</p>
                                        <p class="_order_table_details_item">LONDON</p>
                                        <p class="_order_table_details_item">County</p>
                                        <p class="_order_table_details_item">SW17 0ER</p>

                                        <h1 class="_order_table_details_price">Total Paid: <span>£55.88</span></h1>
                                        <p class="_order_dispatched">Order Dispatched</p>
                                        <button class="_1btn _btn_long">Download invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->

                        <!-- Item -->
                        <div  @click="isActive = !isActive" :class="isActive == true?'_order_table':'_active  _order_table'">
                            <div class="_order_table_item_top">
                                <div class="_order_table_left align-items-center">
                                    <div class="_order_table_one">
                                        <p class="_order_table_no">RP-971610</p>
                                        <p class="_order_table_no_text">iris coconut drops, iris peanut drops</p>
                                    </div>

                                    <div class="_order_table_two">
                                        <p class="_order_table_status _cenceled"><i>Cenceled</i></p>
                                    </div>

                                    <div class="_order_table_three">
                                        <p class="_order_table_date">08/08/2022</p>
                                    </div>

                                    <div class="_order_table_four">
                                        <p class="_order_table_addrress _1text_overflow">1 SELKIRK ROAD, Tooting, LONDON, County, SW17.</p>
                                    </div>
                                </div>

                                <div class="_order_table_right">
                                    <p class="_order_table_icon"><Icon type="ios-arrow-down" /></p>
                                </div>
                            </div>

                            <div class="_order_table_item_bottom">
                                <div class="_order_table_left">
                                    <!-- Item -->
                                    <div class="_order_table_left_item">
                                        <p class="_order_table_first">First side</p>
                                        <div class="_order_table_card">
                                            <h1 class="_order_table_card_title">51mm Circle Stickers</h1>
                                            <p class="_order_table_card_des">250, 51mm Circle, Single Sided, 190gsm Adhesive Sticker, Flat, No Lamination, None, N/A</p>
                                            <p class="_order_table_card_date">Date : <span>08/08/2022</span></p>
                                            <p class="_order_table_card_price">£25.75</p>
                                        </div>

                                        <div class="_order_table_button">
                                            <button class="_1btn _btn_long">Download First Side</button>
                                            <button class="_2btn _btn_long">Track this item</button>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                </div>
                                <div class="_order_table_right">
                                    <div class="_order_table_details">
                                        <p class="_order_table_details_item">1 SELKIRK ROAD</p>
                                        <p class="_order_table_details_item">Tooting</p>
                                        <p class="_order_table_details_item">LONDON</p>
                                        <p class="_order_table_details_item">County</p>
                                        <p class="_order_table_details_item">SW17 0ER</p>

                                        <h1 class="_order_table_details_price">Total Paid: <span>£55.88</span></h1>
                                        <p class="_order_dispatched">Order Dispatched</p>
                                        <button class="_1btn _btn_long">Download invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->
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
      isActive: false
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>