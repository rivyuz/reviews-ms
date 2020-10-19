package com.riviewz.util;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * This class provides method in order to generate and validate JSON Web Tokens
 */
@Component
public class JwtUtils {

    public String createJwt(String email, int userId, String name, Date date) throws UnsupportedEncodingException{
    	
    	System.out.println();
    	System.out.println("Entering Class=JwtUtils...Method=createJwt()");
    	
        date.setTime(date.getTime() + (300*1000));
        
        System.out.println("Exiting Class=JwtUtils...Method=createJwt()");
        System.out.println();
        
        return generateJwt(email, userId, name, date);
    }
    
    public String generateJwt(String email, int userId, String name, Date date) throws java.io.UnsupportedEncodingException {
    	
    	System.out.println();
    	System.out.println("Entering Class=JwtUtils...Method=generateJwt()");

        String jwt = Jwts.builder()
                .setSubject(email)
                .setExpiration(date)
                .claim("userId", userId)
                .claim("name", name)
                .signWith(
                        SignatureAlgorithm.HS256,
                        "myPersonalSecretKey12345".getBytes("UTF-8")
                )
                .compact();
        
        System.out.println("Generated JWT = " + jwt);
        
        System.out.println("Exiting Class=JwtUtils...Method=generateJwt()");
        System.out.println();
        
        return jwt;
    }


    public Map<String, Object> jwt2Map(String jwt) throws java.io.UnsupportedEncodingException, ExpiredJwtException {
    	
    	System.out.println();
    	System.out.println("Entering Class=JwtUtils...Method=jwt2Map()");

        Jws<Claims> claim = Jwts.parser()
                .setSigningKey("myPersonalSecretKey12345".getBytes("UTF-8"))
                .parseClaimsJws(jwt);

        int userId  = claim.getBody().get("userId", Integer.class);
        String name = claim.getBody().get("name", String.class);

        System.out.println("userId = " + userId);
        System.out.println("name = " + name);
        
        Date expDate = claim.getBody().getExpiration();
        String email = claim.getBody().getSubject();

        Map<String, Object> userData = new HashMap<>();
        userData.put("email", email);
        userData.put("userId", userId);
        userData.put("name", name);
        userData.put("exp_date", expDate);

        Date now = new Date();
        if (now.after(expDate)) {
            throw new ExpiredJwtException(null, null, "Session expired!");
        }

        System.out.println("Exiting Class=JwtUtils...Method=jwt2Map()");
        System.out.println();
        
        return userData;
    }


    /**
     * this method extracts the jwt from the header or the cookie in the Http request
     *
     * @param request
     * @return jwt
     */
    public String getJwtFromHttpRequest(HttpServletRequest request) {
    	
    	System.out.println();
    	System.out.println("Entering Class=JwtUtils...Method=getJwtFromHttpRequest()");
    	
        String jwt = null;
        if (request.getHeader("jwt") != null) {
        	
            jwt = request.getHeader("jwt"); //token present in header
            
            System.out.println("JWT from HttpRequest header = " + jwt);
            
        } else if (request.getCookies() != null) {
            Cookie[] cookies = request.getCookies(); //token present in cookie
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("jwt")) {
                    jwt = cookie.getValue();
                }
            }
        }
        
        System.out.println("Exiting Class=JwtUtils...Method=getJwtFromHttpRequest()");
        System.out.println();
        
        return jwt;
    }

    public Map<String, Object> verifyJwtAndGetData(String jwt) throws  Exception {
    	
    	System.out.println();
    	System.out.println("Entering Class=JwtUtils...Method=verifyJwtAndGetData()");
        
        System.out.println("JWT = " + jwt);
        
        if(jwt == null){
            throw  new Exception();
        }
        
        System.out.println("Exiting Class=JwtUtils...Method=verifyJwtAndGetData()");
        System.out.println();
        
        return jwt2Map(jwt);
    }    
}
