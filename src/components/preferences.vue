<template>
    <div class="_1content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-8">
                    <div class="_preferances">
                        <h1 class="_preferances_title">Preferences</h1>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1group">
                                    <p class="_1label">Your email address</p>
                                    <input class="_1input" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1group">
                                    <p class="_1label">Your first name</p>
                                    <input class="_1input" placeholder="Your first name">
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1group">
                                    <p class="_1label">Your surname</p>
                                    <input class="_1input" placeholder="Your surname">
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1group">
                                    <p class="_communication">Communication Preferences (tick all methods you would like to be contacted through)</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1group">
                                    <RadioGroup>
                                        <Radio></Radio> Email <br/>
                                        <Radio></Radio> Phone Calls <br/>
                                        <Radio></Radio> Direct Mail
                                    </RadioGroup>
                                </div>
                            </div>

                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1button_group">
                                    <button class="_1btn">Update Preferences</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>