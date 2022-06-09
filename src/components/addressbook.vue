<template>
    <div>
        <div class="_1content">
            <div class="container">
                <div class="_order">
                    <h1 class="_oreder_title">Address Book</h1>

                    <div class="_del_add _addressBook_main">
                        <div class="_1group _addressBook_top">
                            <div class="_input_button">
                                <Icon type="ios-search"></Icon>
                                <input class="_1input" placeholder="Town/City">
                            </div>

                            <p class="_1label _del_add_label">
                                <span>Add a new address</span>
                            </p>
                        </div>

                        <div class="_del_add_main">
                            <div class="row">
                                <!-- Item -->
                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                    <div class="_del_add_card _addressBook">
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

                                        <p class="_addressBook_remove">
                                            <span>Remove address</span>
                                        </p>
                                    </div>
                                </div>
                                <!-- Item -->

                                <!-- Item -->
                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                    <div class="_del_add_card _active _addressBook">
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

                                        <p class="_addressBook_remove">
                                            <span>Remove address</span>
                                        </p>
                                    </div>
                                </div>
                                <!-- Item -->

                                <!-- Item -->
                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                    <div class="_del_add_card _addressBook">
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
                                        <p class="_addressBook_remove">
                                            <span>Remove address</span>
                                        </p>
                                    </div>
                                </div>
                                <!-- Item -->

                                
                                <!-- Item -->
                                <div class="col-12 col-md-6 col-lg-6 _del_add_card_item">
                                    <div class="_del_add_card _addressBook">
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
                                        <p class="_addressBook_remove">
                                            <span>Remove address</span>
                                        </p>
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
    
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>