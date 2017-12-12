package com.yourid.arsample;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import android.content.Intent;
import android.os.Bundle;
import android.app.Activity;
import android.view.View;

public class TourOverviewActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tour_overview);
    }

    public void back(View v){
        Intent i= new Intent(this,TourOverviewActivity.class);
        startActivity(i);
    }
}
